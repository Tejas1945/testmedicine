const { Category } = require('../models/category');
const { Product } = require('../models/products');
const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

(async () => {
    const pLimit = (await import('p-limit')).default;

    router.get(`/`, async (req, res) => {
        const productList = await Product.find().populate('category');

        if (!productList) {
            res.status(500).json({ success: false });
        }
        res.send(productList);
    });

    router.get(`/:id`, async (req, res) => {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) {
            res.status(500).json({ success: false });
        }
        res.send(product);
    });

    router.post(`/create`, async (req, res) => {
        const limit = pLimit(2);

        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);

        const imageurls = uploadStatus.map((image) => {
            return image.secure_url;
        });

        if (!uploadStatus) {
            return res.status(400).json({ error: "Images could not be uploaded!!!", status: false });
        }

        const category = await Category.findById(req.body.category);
        if(!category) return res.status(400).send('Invalid Category!!!');

        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: imageurls,
            stock: req.body.stock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        });
        
        product = await product.save();
        if(!product){
            res.status(500).json({ error: err, success: false });
        }

        res.status(200).send(product);

    });

    router.delete(`/:id`, async (req, res) => {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            return res.status(404).json({message: "Product not found!!!", success: false});
        }
        res.status(200).json({message: "Product deleted successfully!!!", success: true});
    });

    router.put(`/:id`, async (req, res) => {
        const limit = pLimit(2);

        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);

        const imageurls = uploadStatus.map((image) => {
            return image.secure_url;
        });

        if (!uploadStatus) {
            return res.status(400).json({ error: "Images could not be uploaded!!!", status: false });
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: imageurls,
                stock: req.body.stock,
                rating: req.body.rating,
                numReviews: req.body.numReviews,
                isFeatured: req.body.isFeatured,
            },
            { new: true }
        );

        if (!product) {
            return res.status(500).json({ message: 'The product could not be updated!!!', success: false });
        }

        res.status(200).send(product);
    });

})();

module.exports = router;
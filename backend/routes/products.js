const { Products } = require('../models/products');
const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
//const pLimit = require('p-limit');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

router.get(`/`, async (req, res) => {
    const product_List = await Products.find().populate('category');

    if (!product_List) {
        res.status(500).json({ success: false });
    }
    res.send(product_List);
});

router.get(`/:id`, async (req, res) => {
    const product_ID = await Products.findById(req.params.id);

    if (!product_ID) {
        res.status(500).json({ message: 'The product with the given ID was not found.', success: false });
    }
    else{
        res.status(200).send(product_ID);
    }
    
});

router.post(`/create`, async (req, res) => {
    const { default: pLimit } = await import('p-limit');
    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        });
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imageurls = uploadStatus.map((img) => {
        return img.secure_url;
    });

    if(!uploadStatus){
        return res.status(500).json({error: "Image upload failed!!!", status: false});
    }
    else{
        let product = new Products({
            name: req.body.name,
            description: req.body.description,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            images: imageurls,
            stock: req.body.stock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        });
    
        if(!product){
            return res.status(500).json({error: err, success: false});
        }
        else{
            product = await product.save();
            res.status(200).send(product);
        }
    }
});

router.delete(`/:id`, async (req, res) => {
    const deleted_product = await Products.findByIdAndDelete(req.params.id);

    if(!deleted_product){
        return res.status(404).json({message: "product not found!!!", success: false});
    }
    else{
        res.status(200).json({success: true, message: "product deleted successfully!!!"});
    }
});

router.put(`/:id`, async (req, res) => {
    const { default: pLimit } = await import('p-limit');
    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        });
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imageurls = uploadStatus.map((img) => {
        return img.secure_url;
    });

    if(!uploadStatus){
        return res.status(500).json({error: "Image upload failed!!!", status: false});
    }
    else{
        const product = await Products.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                brand: req.body.brand,
                price: req.body.price,
                category: req.body.category,
                images: imageurls,
                stock: req.body.stock,
                rating: req.body.rating,
                numReviews: req.body.numReviews,
                isFeatured: req.body.isFeatured,
            },
            { new: true }
        );
    
        if (!product) {
            return res.status(404).send('The product with the given ID was not found!!!');
        }
        else{
            res.status(200).send(product);
        }
    }
});

module.exports = router;

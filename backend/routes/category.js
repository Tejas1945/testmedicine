const { Category } = require('../models/category');
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
        const categoryList = await Category.find();

        if (!categoryList) {
            res.status(500).json({ success: false });
        }
        res.send(categoryList);
    });

    router.get(`/:id`, async (req, res) => {
        const category = await Category.findById(req.params.id);

        if (!category) {
            res.status(500).json({ message: 'The category with the given ID was not found.', success: false });
        }
        res.status(200).send(category);
    });


    router.delete(`/:id`, async (req, res) => {
        const  deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if(!deletedCategory){
            return res.status(404).json({message: "category not found!!!", success: false});
        }

        res.status(200).json({success: true, message: "category deleted successfully!!!"});
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

        let category = new Category({
            name: req.body.name,
            images: imageurls,
            color: req.body.color
        });

        if (!category) {
            res.status(500).json({ error: err, success: false });
        }

        category = await category.save();
        res.status(201).json(category);
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

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: imageurls,
                color: req.body.color
            },
            { new: true }
        );

        if (!category) {
            return res.status(500).json({ message: 'The category could not be updated!!!', success: false });
        }

        res.status(200).send(category);
    });



})();

module.exports = router;

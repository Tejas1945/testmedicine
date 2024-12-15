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
    const category_List = await Category.find();

    if (!category_List) {
        res.status(500).json({ success: false });
    }
    res.send(category_List);
});

router.get(`/:id`, async (req, res) => {
    const category_ID = await Category.findById(req.params.id);

    if (!category_ID) {
        res.status(500).json({ message: 'The category with the given ID was not found.', success: false });
    }
    else{
        res.status(200).send(category_ID);
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
        let category = new Category({
            name: req.body.name,
            images: imageurls,
            color: req.body.color
        });
    
        if(!category){
            return res.status(500).json({error: err, success: false});
        }
        else{
            category = await category.save();
            res.status(200).send(category);
        }
    }
});

router.delete(`/:id`, async (req, res) => {
    const deleted_Category = await Category.findByIdAndDelete(req.params.id);

    if(!deleted_Category){
        return res.status(404).json({message: "Category not found!!!", success: false});
    }
    else{
        res.status(200).json({success: true, message: "Category deleted successfully!!!"});
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
            return res.status(404).send('The category with the given ID was not found!!!');
        }
        else{
            res.status(200).send(category);
        }
    }
});

module.exports = router;

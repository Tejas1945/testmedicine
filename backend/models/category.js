const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //trim: true,
        //unique: true
    },
    images:[
        {
            type: String,
            required: true
        }
    ],
    color:{
        type: String,
        required: true
    }
});

exports.Category = mongoose.model('Category', categorySchema);

require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const Form = mongoose.model('Form', {
    name: String,
    email: String,
});

module.exports = Form;
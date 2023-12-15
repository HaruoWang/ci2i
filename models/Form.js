const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://haruo:wang@test.6n0ikyf.mongodb.net/test');

const Form = mongoose.model('Form', {
    name: String,
    email: String,
});

module.exports = Form;
const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    first_name: { type: String},
    last_name: { type: String },
    address: { type: String },
    phoneNO: { type: Number },
    email: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = Employee ;
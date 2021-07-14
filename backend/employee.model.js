const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    department: {
        type: String
    },
    job_title: {
        type: String
    }
});

module.exports = mongoose.model('Employee', Employee);
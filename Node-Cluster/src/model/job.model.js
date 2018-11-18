const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JobSchema = new Schema({
    jobId: {type: String},
    priority: {type: String},
    controllerName:{type:String},
    status:{type:String},
    payLoad:{type:{}}
});


// Export the model
module.exports = mongoose.model('Job', JobSchema);
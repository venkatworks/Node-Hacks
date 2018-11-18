const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RequirementSchema = new Schema({
    id:{type:String},
    role: {type: String},
    typeOfJob: {type: String},
    location:{type:String},
    wage:{type:String},
    replyRate:{type:String},
    description:{type:String},
    skills:{type:[]}
});

// Export the model
module.exports = mongoose.model('Requirement', RequirementSchema);
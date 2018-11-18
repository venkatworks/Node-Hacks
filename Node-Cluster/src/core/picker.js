// Picker
const Job = require('../model/job.model');

var picker = (()=>{

    var obj = {}

    obj.fetchJobs = function(){
        var promise = new Promise((resolve,reject)=>{
            Job.find({}, function(err, jobs) {
                resolve(jobs);
            });
        })
        return promise;
    }

    return obj

})();

module.exports = picker;
// Schedule
const threadpool = require('../core/threadpool.service');

var scheduler = (()=>{

    var obj = {}

    obj.scheduleJobs = function(jobs){       
       jobs.filter((job)=>{            
            threadpool.forkThread(job.controllerName,job.payLoad.reqBody);
       })
    }

    return obj

})();

module.exports = scheduler;
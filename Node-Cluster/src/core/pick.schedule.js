const picker = require('../core/picker');
const scheduler = require('../core/scheduler');

// Picker
var pickSchedule = (()=>{
    var obj = {}
    obj.pickJobAndScheduleJob = function(){  
        setInterval(()=>{
            picker.fetchJobs().then((data)=>{
                scheduler.scheduleJobs(data)
            },(error)=>{
                console.log(error);
            });
        },30000);
    }
    return obj;
})();

module.exports = pickSchedule;
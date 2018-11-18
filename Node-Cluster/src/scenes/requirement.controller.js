const requirementService = require('../service/requirement.service');
const Job = require('../model/job.model');

var requirementController = (function(){

    var ctrlObject = {};
    

    ctrlObject.getRequirment = function(req,res){ 
      let data =  requirementService.getRequirements();
      res.send(data);
    }

    ctrlObject.saveRequirement = function(req,res){             
        let payLoad = {
            reqBody:req.body,
            reqParams:req.params,
            reqQuery:req.query
        }

        let job = new Job({
            jobId: new Date().getTime()+"",
            priority: "high",
            controllerName:"postrequirement.service.js",
            status:"Submitted",
            payLoad:payLoad
        });

        job.save(function (err) {
            if (err) {
                console.log(err);
            }
            res.send('Job  Saved successfully')
        });        
       // res.send("Job saved successfully");
    }

    ctrlObject.updateRequirement = function(req,res){
        res.send('update Requirement');
    }

    ctrlObject.deleteRequirement = function(req,res){
        res.send('delete Requirement');
    }


    return ctrlObject;

})();

module.exports = requirementController;
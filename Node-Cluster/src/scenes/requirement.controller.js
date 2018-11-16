const threadPool = require('../core/threadpool.service');
const requirementService = require('../service/requirement.service');


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
        threadPool.forkThread('postrequirement.service.js',payLoad);
        res.send("Post call submitted successfully");
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
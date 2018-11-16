var express = require('express');
var router = express.Router();
var reqCtrl = require('../scenes/requirement.controller');

router.get('/',((req,res) => {
    reqCtrl.getRequirment(req,res) 
}));

router.post('/',((req,res)=>{
    reqCtrl.saveRequirement(req,res);
}));

router.put('/',((req,res)=>{
    reqCtrl.updateRequirement(req,res);
}));

router.delete('/',((req,res)=>{
    reqCtrl.deleteRequirement(req,res);
}));

module.exports = router;
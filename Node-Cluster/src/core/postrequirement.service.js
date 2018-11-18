var Requirement = require('../model/requirement.model');

function postReqmnt(){

    let payLoad = JSON.parse(JSON.parse(JSON.stringify(process.argv.splice(2,process.argv.length)))[0]);        
    return new Promise((resolve,reject)=>{            
            var requirement = new Requirement(payLoad);
            requirement.save((error)=>{
                if (error) {
                    console.log(error);
                }          
            });
        });
}    

try{
    postReqmnt();    
}catch(error){
    console.error(error);
}


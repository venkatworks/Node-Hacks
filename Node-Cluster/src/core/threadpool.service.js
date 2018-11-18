const {fork} = require('child_process');

const threadPool = (function(){

    
    let publicObject = {};
    let worker = ''

    publicObject.forkThread = (filename,_args={},_options=[]) => {        
        worker = fork(`${__dirname}/${filename}`,[JSON.stringify(_args)]);  
        worker.on('message',(filename)=>{
            console.log(filename);    
        })        
    }

    return publicObject;

})();

module.exports = threadPool;
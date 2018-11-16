const fetch = require("node-fetch");
const eventEmitter = require('events');

const {BASE_URL,SERVICE} = require('../constants/app-constant');


function postReqmnt(){
    let payLoad = JSON.parse(JSON.parse(JSON.stringify(process.argv.splice(2,process.argv.length)))[0]);    
    return new Promise((resolve,reject)=>{
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: payLoad,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                resolve(response)
            })
            .catch(error=>{
                reject(error);
            })
        }) 
    
}    

try{
    postReqmnt();    
}catch(error){
    console.error(error);
}


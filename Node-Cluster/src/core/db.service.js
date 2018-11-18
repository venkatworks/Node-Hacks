const mongoose = require('mongoose');
const dev_db_url = 'mongodb://mohan:mohandb19@ds163683.mlab.com:63683/mohandb';

var mongoDBObj = (function(){

    var ctrlObject = {};
    var mDB = '';

    ctrlObject.connectDB = function(callBack){ 
        let mongoDB = process.env.MONGODB_URI || dev_db_url;
        mongoose.connect(mongoDB,{ useNewUrlParser: true });
        mongoose.Promise = global.Promise;
        mDB = mongoose.connection;
        mDB.on('error', console.error.bind(console, 'MongoDB connection error:')); 
        callBack(mDB)       
    }

    ctrlObject.getDB=function(){
        return mDB;
    }

    return ctrlObject;

})();

module.exports = mongoDBObj;
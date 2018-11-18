const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbObj = require('./src/core/db.service');
const pickAndSchedule = require('./src/core/pick.schedule');



// connect to DataBase service
dbObj.connectDB((success)=>{
    console.log("DB Connection established");
    pickAndSchedule.pickJobAndScheduleJob();
});

const port = process.env.port || 3001;
var appRouter = require('./app_router');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-requested-with,Content-Type,Accept,Authorizarion');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Method','POST,PUT,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/',appRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



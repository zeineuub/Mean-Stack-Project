//importing dependecies
const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');
const path=require('path');
const route=require('./routes/route');
//use express framework
const app=express();


//adding middleware --cors
app.use(cors());

//body-pasre
app.use(bodyparser.json);

//use route
app.use('/api',route);

//DB configuration
const db=require('./config/keys').MongoURI;

//Connect to Mongo
//userNewPerser khater tajim tjina error
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB Connected Great ");
})
.catch(err=>console.log(err));

//static file
//using directer
app.use(express.static(path.join(__dirname,'public')));
//el port 
const PORT=process.env.Port||5000;
//listenning to the PORT
app.listen(PORT,()=>console.log(`Server Started at ${PORT}`));

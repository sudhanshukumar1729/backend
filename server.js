const express = require('express');
const contactRoutes = require('./routes/routes');
const { errorHandler } = require('./middleware/errorhandler');
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

connectDb();

app.use('/api/contacts',contactRoutes);

app.use('/home',contactRoutes);

app.get('/jsoncontacts',(req,res)=>{
    res.json({contact:"sudhanshu225202@gmail.com"});
});

//Error handler middleware should be the last piece of middleware
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`are kaise h bhai, port to mast chal raha h ${port} pe`);
});
const express=require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());

//import routes
const routes=require('./routes/route')


app.use('/', routes)


//connect to db
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => console.log('Connected to DB!!')
);

//listen to server
 app.listen(3000);
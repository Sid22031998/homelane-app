const express=require('express');
const router=express.Router();
const homelane = require("../models/Model")

//homepage
router.get('/', async (req, res) => {
 	res.send('Homelane')
 });

// display properties based on price
router.get('/budget/:minPrice/:maxPrice', (req, res) => {
 	homelane.find({}, function(err, data){
        if(err){
            console.log(err);
        }else{
            // res.send(data);
            // console.log(Object.keys(data).length);
            try {
            	var display=[];
	            for (var key in data) {
				    // skip loop if the property is from prototype
				    if (!data.hasOwnProperty(key)) continue;

				    var obj = data[key];
				    for (var prop in obj) {
				        // skip loop if the property is from prototype
				        if (!obj.hasOwnProperty(prop)) continue;
				        // console.log(typeof parseInt(req.param.minPrice));
				        // console.log(parseInt(req.params.minPrice));
				        if(obj.price >= parseInt(req.params.minPrice) && obj.price <= parseInt(req.params.maxPrice)){
				        	// console.log(obj);
				        	display.push(obj);
				        }
				    }
				}
				console.log(display.length);
				res.send(display);
			}catch(error){
				console.log(error);
			}
        }
    });
 });


// display properties based on sqaure foot
router.get('/sqft/:minSqrt', (req, res) => {
 	homelane.find({}, function(err, data){
        if(err){
            console.log(err);
        }else{
            // res.send(data);
            // console.log(Object.keys(data).length);
            try {
            	var display=[];
	            for (var key in data) {
				    // skip loop if the property is from prototype
				    if (!data.hasOwnProperty(key)) continue;

				    var obj = data[key];
				    for (var prop in obj) {
				        // skip loop if the property is from prototype
				        if (!obj.hasOwnProperty(prop)) continue;
				      	
				        if(obj.sqft_living > parseInt(req.params.minSqrt)){
				        	// console.log(obj);
				        	display.push(obj);
				        }
				    }
				}
				console.log(display.length);
				res.send(display);
			}catch(error){
				console.log(error);
			}
        }
    });
 });


// display properties based on age
router.get('/age/:year', (req, res) => {
 	homelane.find({}, function(err, data){
        if(err){
            console.log(err);
        }else{
            // res.send(data);
            // console.log(Object.keys(data).length);
            try {
            	var display=[];
	            for (var key in data) {
				    // skip loop if the property is from prototype
				    if (!data.hasOwnProperty(key)) continue;

				    var obj = data[key];
				    for (var prop in obj) {
				        // skip loop if the property is from prototype
				        if (!obj.hasOwnProperty(prop)) continue;
				        
				        if(obj.yr_built > parseInt(req.params.year) || obj.yr_renovated > parseInt(req.params.year)){
				        	// console.log(obj);
				        	display.push(obj);
				        }
				    }
				}
				console.log(display.length);
				res.send(display);
			}catch(error){
				console.log(error);
			}
        }
    });
 });



//brownie points :)
//display standard price for each homes
router.get('/standard', (req, res) => {
 	homelane.find({}, function(err, data){
        if(err){
            console.log(err);
        }else{
            // res.send(data);
            // console.log(Object.keys(data).length);
            try {
            	var display=[];
	            for (var key in data) {
				    // skip loop if the property is from prototype
				    if (!data.hasOwnProperty(key)) continue;

				    var obj = data[key];
				    for (var prop in obj) {
				        // skip loop if the property is from prototype
				        if (!obj.hasOwnProperty(prop)) continue;
				        const price = (((obj.bedrooms * obj.bathrooms * (obj.sqft_living / obj.sqft_lot) * obj.floors) + obj.waterfront + obj.view) * obj.condition * ( obj.sqft_above + obj.sqft_basement) -10*(2022 - Math.max(obj.yr_built, obj.yr_renovated))) * 100
				        obj.price=parseInt(price)
				        display.push(obj);
				    }
				}
				console.log(display.length);
				res.send(display);
			}catch(error){
				console.log(error);
			}
        }
    });
 });

 module.exports=router;
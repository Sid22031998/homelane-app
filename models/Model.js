const mongoose=require('mongoose');

const data0967ed6 = mongoose.Schema({
	date: Date,
	price: Number,
	bedrooms: Number,
	bathrooms: Number,
	sqft_living: Number,
	sqft_lot: Number,
	floors: Number,
	waterfront: Number,
	view: Number,
	condition: Number,
	sqft_above: Number,
	sqft_basement: Number,
	yr_built: Number,
	yr_renovated: Number,
	street: String,
	city: String,
	statezip: String,
	country: String

})

module.exports=mongoose.model('data0967ed6', data0967ed6);
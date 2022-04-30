"# homelane-app" Hackerearth Problem<br />
<br />
Deployement URL: https://homelane-app.herokuapp.com/ <br />
Github: https://github.com/Sid22031998/homelane-app <br />
<br />
Different API <br />
<br />
/  => homepage <br />
/budget/:minPrice/:maxPrice => To fetch all the properties which fall in the price range of "minPrice" and "maxPrice" <br />
/sqft/:minSqrt 				=> To fetch all the properties whose sqft_living is greater than "minSqrt" <br />
/age/:year 					=> To fetch all the properties whose yr_built or yr_renovated is greater than "year" <br />
/standard 					=> To fetch all the properties with updated price using the formulae given in the problem statement <br />
<br />
To run in local machine: <br />
	1. unzip the folder <br />
	2. navigate to the folder "homelane" <br />
	3. open the cmd <br />
	4. run "npm i" <br />
	5. run "npm start" <br />
	6. run your tests in postman <br />
<br />
For testing in postman, below are the examples: <br />
	http://localhost:3000/ <br />
	http://localhost:3000/budget/420000/500000 <br />
	http://localhost:3000/sqft/13000 <br />
	http://localhost:3000/age/2013 <br />
	http://localhost:3000/standard <br />
<br />

"# homelane-app" 

Deployement URL: https://homelane-app.herokuapp.com/
Github: https://github.com/Sid22031998/homelane-app

Different API

/  => homepage
/budget/:minPrice/:maxPrice => To fetch all the properties which fall in the price range of "minPrice" and "maxPrice"
/sqft/:minSqrt 				=> To fetch all the properties whose sqft_living is greater than "minSqrt"
/age/:year 					=> To fetch all the properties whose yr_built or yr_renovated is greater than "year"
/standard 					=> To fetch all the properties with updated price using the formulae given in the problem statement

To run in local machine:
	1. unzip the folder
	2. navigate to the folder "homelane"
	3. open the cmd
	4. run "npm i"
	5. run "npm start"
	6. run your tests in postman

For testing in postman, below are the examples:
	http://localhost:3000/
	http://localhost:3000/budget/420000/500000
	http://localhost:3000/sqft/13000
	http://localhost:3000/age/2013
	http://localhost:3000/standard

Note: 
	I am providing the .env file as if something breaks from the heroku end then you can execute from your local machine. I know its not a good practice but pipelines can break due to various reasons.
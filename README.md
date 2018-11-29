Welcome to Burguer Project

In this project we have some essentials part, just like the API and the WEB.

API:

For the API part I use the RESTful rules to create an API with Express.js, with this powerful tool I was able to do the CRUD (create, read, update, delete) to the 'ingredientes' and 'lanches' data. Basically I use an object to represent my original data, of course this data will need be in a database in a real aplication.

For validate the user inputs, I used a library called Joi, and I create a lot of validations schemas to compare with the user object when the user send to the API some object. This is very important because in that way it's possible to mainain the data consistency. 

Also I create some middlewares to use, for example: the wrapAsync was used to resolve the async functions. To handle the ES6 syntax, I use the Babel library, to handle with this kind of syntax in Node.js.

Another curisity from the API is the ESLint that was used to ensure a high quality control about the code. ESLint is very important to establish a standard in the JavaScript code.

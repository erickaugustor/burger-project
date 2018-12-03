## Welcome to Burger Project

###### In this project we have some essentials part, just like the API and the WEB.

Usage:

First you should open your terminal and go to the burger-api paste and start the tests and then the API.

```
npm run test
npm run start
```
The server will open on localhost:3006

After that, you should open the burger-web folder and start the project to observe the system.

```
npm run start
```

## Code Explanations

> API:

For the API part I use the RESTful rules to create an API with Express.js, with this powerful tool I was able to do the CRUD (create, read, update, delete) to the 'ingredientes' and 'lanches' data. Basically I use an object to represent my original data, of course this data will need be in a database in a real aplication.

The project routes:

```
- GET /api/ingredientes

- POST /api/ingredientes

{
  "nome": "picanha",
  "valor": 2
}

- GET /api/lanches

- POST /api/lanches

Example for POSTMAN: 
{
  "nome": "x-picanha",
  "ingredientes": [
    "bacon",
    "hamburguer",
    "queijo"
  ]
}

- POST /api/orcamentos

Example for POSTMAN: 
{
"nome": "erick",
"pedido": [{
    "nome": "queijo",
    "quantidade": 4
  }, {
    "nome": "alface",
    "quantidade": 1
  }]
}
```

For validate the user inputs, I used a library called Joi, and I create a lot of validations schemas to compare with the user object when the user send to the API some object. This is very important because in that way it's possible to mainain the data consistency. 

Also I create some middlewares to use, for example: the wrapAsync was used to resolve the async functions. To handle the ES6 syntax, I use the Babel library, to handle with this kind of syntax in Node.js.

Another curisity from the API is the ESLint that was used to ensure a high quality control about the code. ESLint is very important to establish a standard in the JavaScript code.

For the tests I used Mocha, Chai and Supertest, they served to test the functions and routes of the API, assuring the system's business logic.

I also used a JSON file where it was possible to write data and how routes could access a file that was not in memory. Example:

```
{
  "ingredientes": [{}],
  "lanches": [{}],
  "pedidos": [{}]
}
```

> WEB:

The WEB part was made in React, so it was possible to have a better control of the data and to know how to distribute its flow according to the components.

A library called Superagent was also used to be able to connect to the API and use its data to render the orders on the screen.

```
In both the API and the WWW, functions were used that had specific functions in the system, so the logic would be concentrated in one point of the application.
```

We used some CSS and layout concepts to develop a UI for the project. I have used and adapted some CSS classes to fit the project.

![alt text](https://i.imgur.com/9VjMkDR.png)

Validations were performed with propTypes to ensure data integrity in React components.

*Note: It was not possible to perform all validations on the components, and I was not able to implement some functions almost ready, for example to disable the buttons in certain cases, but this would be done with more time.*

> SCRIPTS:

Some SQL scripts have been made for a possible demonstration.

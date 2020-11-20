# MAGIC POTION

## Tech Stack
- Server side: NodeJS and ExpressJS
- Client side: ReactJS (UI components) and ReduxJS (state management/API requests)

## How to run the project
1. Clone this repo
2. On your terminal, `cd` into `/server` folder and run `npm start` to start server on port 3001.
3. Open a new tab on your terminal, `cd` into `/client` folder and run `npm start`. Client will run on port 3000 and load the web UI on your browser. If it doesn't open automatically, type `http://localhost:3000/` on your browser.
4. Try submitting the form to see validation errors.
5. Open Developer Console, Network tab and try submitting the form with valid inputs to verify the request succeeds with 201 status code. Ideally, I should show success message and clear the fields :)
6. I recommend using Postman to test server's API endpoints.


## Data Schema
This is the Order data model:
```
{	
  "id": number,
  "firstName": "string",	
  "lastName": "string",	
  "address": {	
    "street1": "string",	
    "street2": "string",	
    "city": "string",	
    "state": "string",	
    "zip": "string"	
  },	
  "phone": "string",	
  "email": "string",	
  "quantity": number,	
  "total": "string",	
  "payment": {	
    "ccNum": "string",	
    "exp": "string",	
  }	
  orderDate: "string",
  fulfilled: boolean
}
```

## What I would do to improve and scale the app
SERVER SIDE:
1. Right now I'm using local storage in `db-dev` folder. I'd spin up a MongoDB database separately so this can scale up in terms of size and traffic.
- Ideally, I need to implement user authentication on server side so that I can easily track order details for each unique user.
- There should be TWO data models in database: `User` model and `Order` model. Each `User` entity should correspond to multiple `Order` entities (1:MANY relationship).
2. There should be a separate middleware for rigorous error-handling.
3. A tons of unit tests :)

CLIENT SIDE:
1. I'm using text input for most of form fields. Ideally they need to be customized for specific data types (text, date, number etc).
2. I'm throwing a generic error validation message for all input errors. Ideally, I should have customized validations for each input types (e.g. validate email address format, phone number, credit card number, expirty date).
3. I should show relevant success/error message after user clicks Submit button.
4. Unit tests, unit tests, unit tests. 



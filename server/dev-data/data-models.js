/*
POST /api/magic
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "address": {
    "street1": "string",
    "street2": "string",
    "city": "string",
    "state": "string",
    "zip": "string"
  },
  "phone": "string",
  "quantity": number,
  "total": "string",
  "payment": {
    "ccNum": "string",
    "exp": "string",
  }
}
before adding a new order to the DB, verify that the client is not submitting an order that will exceed the
maximum of 3 magic potions per customer for a given month.

returns:
201 CREATED
{
"id": uid
}

GET /api/magic/<uid>
PATCH /api/magic
DELETE /api/magic/<uid>


*/

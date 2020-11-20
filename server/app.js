const express = require('express');

const orderRouter = require('./routes/orderRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/magic', orderRouter);

module.exports = app;

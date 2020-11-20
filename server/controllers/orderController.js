const fs = require('fs');

const DB = `${__dirname}/../db-dev/orders.json`;
const orders = JSON.parse(fs.readFileSync(DB));

exports.getAllOrders = (req, res) => {
  res.status(200).json({
    status: '200',
    requestTime: req.requestTime,
    results: orders.length,
    data: {
      orders
    }
  });
};

exports.getOneOrder = (req, res) => {
  const order = orders.find((order) => order.id === req.params.id * 1);
  if (order === undefined) {
    return res.status(404).json({
      status: '404',
      message: 'resource not found'
    });
  }
  res.status(200).json({
    status: '200',
    data: {
      order
    }
  });
};

exports.createOneOrder = (req, res) => {
  const newOrderMonthYear = req.requestTime.slice(0, 7);
  const { firstName, lastName, address, quantity } = req.body;
  const addressString = JSON.stringify(address);
  const ordersInTheSameMonth = orders.filter(
    (order) =>
      order.orderDate >= newOrderMonthYear &&
      order.firstName === firstName &&
      order.lastName === lastName &&
      JSON.stringify(order.address) === addressString
  );

  const totalPotionsOrdered = ordersInTheSameMonth.reduce(
    (acc, order) => acc + order.quantity,
    0
  );

  if (quantity + totalPotionsOrdered > 3) {
    return res.status(400).json({
      status: '400',
      data: {
        totalPotionsThisMonth: totalPotionsOrdered,
        remainingPotion: 3 - totalPotionsOrdered
      }
    });
  }

  const newId = orders[orders.length - 1].id + 1;
  const newOrder = Object.assign(
    { id: newId },
    { orderDate: req.requestTime },
    { fulfilled: false },
    req.body
  );
  orders.push(newOrder);
  fs.writeFile(DB, JSON.stringify(orders), (err) => {
    res.status(201).json({
      status: '201 CREATED',
      id: newId
    });
  });
};

exports.updateOneOrder = (req, res) => {
  if (!req.body.id || req.body.fulfilled === 'null') {
    return res.status(400).json({
      status: '400',
      message: 'missing order id or fulfillment status'
    });
  }

  const { id, fulfilled } = req.body;

  let order = orders.find((order) => order.id === id * 1);
  if (order === undefined) {
    return res.status(404).json({
      status: '404',
      message: 'resource not found'
    });
  }

  order.fulfilled = fulfilled;
  fs.writeFile(DB, JSON.stringify(orders), (err) => {
    res.status(200).json({
      status: '200',
      message: 'resource updated successfully'
    });
  });
};

exports.deleteOneOrder = (req, res) => {
  const id = req.params.id * 1;

  let order = orders.find((order) => order.id === id);
  if (order === undefined) {
    return res.status(404).json({
      status: '404',
      message: 'resource not found'
    });
  }

  const updatedOrders = orders.filter((order) => order.id !== id);
  fs.writeFile(DB, JSON.stringify(updatedOrders), (err) => {
    res.status(200).json({
      status: '200',
      message: 'resource deleted successfully'
    });
  });
};

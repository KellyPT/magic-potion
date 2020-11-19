const express = require('express');
const {
  getAllOrders,
  createOneOrder,
  getOneOrder,
  updateOneOrder,
  deleteOneOrder
} = require('../controllers/orderController');

const router = express.Router();

router.route('/').get(getAllOrders).post(createOneOrder).patch(updateOneOrder);

router.route('/:id').get(getOneOrder).delete(deleteOneOrder);

module.exports = router;

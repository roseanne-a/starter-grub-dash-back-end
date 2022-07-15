const path = require("path");

// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));

function orderExists(req, res, next) {
  const { orderId } = req.params;
  const foundOrder = orders.find((order) => order.id === orderId);

  if (foundOrder) {
    res.locals.order = foundOrder;
    next();
  } else
    next({
      status: 404,
      message: `Order does not exist: ${orderId}.`,
    });
}

module.exports = orderExists;

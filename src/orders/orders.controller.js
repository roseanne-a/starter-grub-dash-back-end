const path = require("path");

// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));

// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

//Import functions to check for required and valid input
const bodyHasProperty = require("../utils/bodyHasProperty");
const orderExists = require("../utils/orderExists");
const dishesAndQuantityAreValid = require("../utils/dishesAndQuantityAreValid");
const orderIdIsValid = require("../utils/orderIdIsValid");

// TODO: Implement the /orders handlers needed to make the tests pass
function list(req, res, next) {
  res.json({ data: orders });
}

function create(req, res, next) {
  const { data: { deliverTo, mobileNumber, status, dishes } = {} } = req.body;

  const newOrder = {
    id: nextId(),
    deliverTo,
    mobileNumber,
    status,
    dishes,
  };

  orders.push(newOrder);
  res.status(201).json({ data: newOrder });
}

function read(req, res, next) {
  res.json({ data: res.locals.order });
}

function update(req, res, next) {
  const { data: { deliverTo, mobileNumber, status, dishes } = {} } = req.body;
  const updatedOrder = res.locals.order;
  const { orderId } = req.params;

  if (updatedOrder["status"] === "delivered") {
    return next({
      status: 400,
      message: `A delivered order cannot be changed`,
    });
  }

  updatedOrder.id = orderId;
  updatedOrder.deliverTo = deliverTo;
  updatedOrder.mobileNumber = mobileNumber;
  updatedOrder.status = status;
  updatedOrder.dishes = dishes;

  res.json({ data: updatedOrder });
}

function destroy(req, res, next) {
  const orderToDestroy = res.locals.order;
  if (orderToDestroy["status"] !== "pending")
    return next({
      status: 400,
      message: "An order cannot be deleted unless it is pending",
    });
  const index = orders.findIndex((order) => order.id == orderToDestroy.id);
  const deleted = orders.splice(index, 1);

  res.sendStatus(204);
}

module.exports = {
  list,
  create: [
    bodyHasProperty("Order", "deliverTo"),
    bodyHasProperty("Order", "mobileNumber"),
    bodyHasProperty("Order", "dishes"),
    dishesAndQuantityAreValid,
    create,
  ],
  read: [orderExists, read],
  update: [
    orderExists,
    orderIdIsValid,
    bodyHasProperty("Order", "deliverTo"),
    bodyHasProperty("Order", "mobileNumber"),
    bodyHasProperty("Order", "status"),
    bodyHasProperty("Order", "dishes"),
    dishesAndQuantityAreValid,
    update,
  ],
  delete: [orderExists, destroy],
};

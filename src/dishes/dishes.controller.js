const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

//Import functions to check for required and valid input
const bodyHasProperty = require("../utils/bodyHasProperty");
const priceIsValid = require("../utils/priceIsValid");
const dishExists = require("../utils/dishExists");
const dishIdIsValid = require("../utils/dishIdIsValid");

function list(req, res, next) {
  res.json({ data: dishes });
}

function create(req, res, next) {
  const { data: { name, description, price, image_url } = {} } = req.body;

  const newDish = {
    id: nextId(),
    name,
    description,
    price,
    image_url,
  };
  dishes.push(newDish);
  res.status(201).json({ data: newDish });
}

function read(req, res, next) {
  res.json({ data: res.locals.dish });
}

function update(req, res, next) {
  const { data: { name, description, price, image_url } = {} } = req.body;
  const { dishId } = req.params;

  const updatedDish = res.locals.dish;

  updatedDish.id = dishId;
  updatedDish.name = name;
  updatedDish.description = description;
  updatedDish.price = price;
  updatedDish.image_url = image_url;

  res.json({ data: updatedDish });
}

// TODO: Implement the /dishes handlers needed to make the tests pass
module.exports = {
  list,
  create: [
    bodyHasProperty("Dish", "name"),
    bodyHasProperty("Dish", "description"),
    bodyHasProperty("Dish", "price"),
    bodyHasProperty("Dish", "image_url"),
    priceIsValid,
    create,
  ],
  read: [dishExists, read],
  update: [
    dishExists,
    dishIdIsValid,
    bodyHasProperty("Dish", "name"),
    bodyHasProperty("Dish", "description"),
    bodyHasProperty("Dish", "price"),
    bodyHasProperty("Dish", "image_url"),
    priceIsValid,
    update,
  ],
};

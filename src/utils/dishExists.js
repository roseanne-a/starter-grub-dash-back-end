const path = require("path");
const dishes = require(path.resolve("src/data/dishes-data"));

//check if the dish exists, if not return an error
function dishExists(req, res, next) {
  const { dishId } = req.params;
  const foundDish = dishes.find((dish) => dish.id === dishId);

  if (foundDish) {
    res.locals.dish = foundDish;
    next();
  } else
    next({
      status: 404,
      message: `Dish does not exist: ${dishId}.`,
    });
}

module.exports = dishExists;

//because quantity is dependant on dishes, check that both are valid
//in one function

function dishesAndQuantityAreValid(req, res, next) {
  const { data: { dishes } = {} } = req.body;
  if (!Array.isArray(dishes) || dishes.length === 0) {
    return next({
      status: 400,
      message: `Order must include at least one dish`,
    });
  }

  for (let index = 0; index < dishes.length; index++) {
    if (
      !dishes[index]["quantity"] ||
      Number.isNaN(dishes[index]["quantity"]) ||
      !Number.isInteger(dishes[index]["quantity"])
    ) {
      return next({
        status: 400,
        message: `Dish ${index} must have a quantity that is an integer greater than 0`,
      });
    }
  }
  next();
}

module.exports = dishesAndQuantityAreValid;

function priceIsValid(req, res, next) {
  const { data: { price } = {} } = req.body;
  //check to make sure price is a number and is greater than 0
  //otherwise return an error with info to fix
  if (typeof price === "number" && price > 0) next();
  else
    next({
      status: 400,
      message: `Dish must have a price that is an integer greater than 0`,
    });
}

module.exports = priceIsValid;

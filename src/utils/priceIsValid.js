function priceIsValid(req, res, next) {
  const { data: { price } = {} } = req.body;
  if (typeof price === "number" && price > 0) next();
  else
    next({
      status: 400,
      message: `Dish must have a price that is an integer greater than 0`,
    });
}

module.exports = priceIsValid;

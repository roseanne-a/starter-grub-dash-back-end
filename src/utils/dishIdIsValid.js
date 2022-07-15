function dishIdIsValid(req, res, next) {
  const { data: { id } = {} } = req.body;
  const { dishId } = req.params;

  if (id === dishId || !id) next();
  else
    next({
      status: 400,
      message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`,
    });
}

module.exports = dishIdIsValid;

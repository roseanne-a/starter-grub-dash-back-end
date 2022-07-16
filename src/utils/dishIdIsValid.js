function dishIdIsValid(req, res, next) {
  const { data: { id } = {} } = req.body;
  const { dishId } = req.params;

  //If dishId  matches the ID in body or no id is input, go to next middleware
  //else return error to prevent id change
  if (id === dishId || !id) next();
  else
    next({
      status: 400,
      message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`,
    });
}

module.exports = dishIdIsValid;

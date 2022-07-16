function orderIdIsValid(req, res, next) {
  const { data: { id } = {} } = req.body;
  const { orderId } = req.params;

  //If orderId  matches the ID in body or no id is input, go to next middleware
  //else return error to prevent id change
  if (id === orderId || !id) next();
  else
    next({
      status: 400,
      message: `Order id does not match route id. Order: ${id}, Route: ${orderId}`,
    });
}

module.exports = orderIdIsValid;

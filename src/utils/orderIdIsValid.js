function orderIdIsValid(req, res, next) {
  const { data: { id } = {} } = req.body;
  const { orderId } = req.params;

  if (id === orderId || !id) next();
  else
    next({
      status: 400,
      message: `Order id does not match route id. Order: ${id}, Route: ${orderId}`,
    });
}

module.exports = orderIdIsValid;

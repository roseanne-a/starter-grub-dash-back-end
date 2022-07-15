function bodyHasProperty(item, property) {
  const statuses = ["pending", "preparing", "out-for-delivery", "delivered"];
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (property === "status" && statuses.indexOf(data["status"]) === -1)
      next({
        status: 400,
        message: `Order must have a status of pending, preparing, out-for-delivery, delivered`,
      });
    else if (data[property] === 0 || (data[property] && data[property] !== ""))
      next();
    else next({ status: 400, message: `${item} must include a ${property}` });
  };
}

module.exports = bodyHasProperty;

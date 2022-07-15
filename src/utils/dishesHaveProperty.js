function bodyHasProperty(item, property) {
  return function (req, res, next) {
    const { dishes = {} } = req.body.data;
    if (dishes[property] === 0 || (dishes[property] && dishes[property] !== ""))
      next();
    else next({ status: 400, message: `${item} must include a ${property}` });
  };
}

module.exports = bodyHasProperty;

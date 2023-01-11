const express = require("express");
const middleware = require("../middleware/middleware");
module1 = express.Router()

module1.get("/", [middleware], (req, res, next) => {
    res.json({ "msg": "inside module1 Success" })
});

module.exports = module1
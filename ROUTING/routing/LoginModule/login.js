const express = require("express");
const jsonToken = require("jsonwebtoken");
const tokenObj = require("../Token/token");

const login = express.Router();

login.post("/", (req, res) => {
    const uname = req.body.uname;
    const upwd = req.body.upwd;
    console.log(req.body);
    if (uname == "admin" && upwd == "admin123") {
        const jwtToken = jsonToken.sign({ uname: uname, upwd: upwd }, "skill");
        tokenObj.token = jwtToken;
        res.json({ login: "Success", token: jwtToken });
    } else {
        res.json({ login: "Faile" });
    }
});

module.exports = login;
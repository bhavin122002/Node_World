const express = require("express");
const app = express();
const PORT = 3300;
app.use(express.json());

// app.get("/login", (req, res) => {
//     console.log(req.query.uname);
//     console.log(req.query.upwd);
//      console.log("inside get ");
//      res.json({ msg: "inside GET Default..."});
// });

// app.get("/login/:uname/:upwd", (req, res) => {
//     console.log(req.params.uname);
//     console.log(req.params.upwd);
//        console.log("insude get");
//        res.json({ msg: "inside GET Default..."});
// });

const login = require("./LoginModule/login");
app.use("/login", login);

const module1 = require("./module1/module1");
app.use("/module3", module1);

app.listen(PORT, () => {
    console.log(`server listening port ${PORT}..`);
})
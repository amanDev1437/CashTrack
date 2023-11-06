const express = require("express");
const app = express();
const data = require("./models/data")
const sequelize = require("./util/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5500;

app.use(cors());
app.use(bodyParser.json());

app.post("/data",(req, res, next) => {
    data.create({
        name: req.body.name,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password
    }).then((result) =>{
        res.status(200).send(result);
    }).catch((err) =>{
        res.status(200).send(err);

    });
});

app.get("/",(req, res, next) => {
    data.findAll().then((result) =>{
        res.json(result);
    }).catch((err) =>{
        res.send("<h1>Page Not Found</h1>");
    });
});

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Database synchronization failed:', err);
  });
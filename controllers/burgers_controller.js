const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    console.log(burger.all);
    console.log(burger.update);
    console.log(burger.addBurger);
    
    
  burger.all((data) => {
    console.log(data);
    const hb = {
      burger: data,
    };
    res.render("index", hb);
  });
});

router.post("/api/burgers", (req, res) => {
  console.log(req.body);
//   burger.addBurger(
//     ["burger_name", "devoured"],
//     [`req.body.name`, `req.body.devoured`],
//     (result) => {
//       console.log(result);
//       res.json({ id: result.insertId });
//     });
burger.addBurger(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      console.log(result);
      res.json({ id: result.insertId });
    });
//   let burger = req.body.name;
//   let devoured = req.body.devoured;


//   burger.addBurger(
//     ["burger_name", "devoured"],
//     [burger, devoured],
//     (result) => {
//       console.log(result);
//       res.json({ id: result.insertId });
//     }
//   );
});

router.put("/api/burgers", (req, res) => {});

module.exports = router;

const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
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
  let cols = ["burger_name", "devoured"]
burger.addBurger(
    cols,
    [`${req.body.name}`, req.body.devoured],
    (result) => {
      console.log(result);
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
  let change = req.body.devoured;
  let id = "id = " + req.params.id;
  
  burger.update({
    devoured: change
  }, id, (result)=>{
    console.log(result);
  })

});

module.exports = router;

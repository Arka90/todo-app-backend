const express = require("express");

const TodoList = require("../models/task_list");

module.exports.add = (req, res) => {
  console.log(req.body);
  TodoList.create(
    {
      data: req.body.data,
      category: req.body.category,
      date: req.body.date,
    },
    (err, newContact) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
  return res.redirect("back");
};

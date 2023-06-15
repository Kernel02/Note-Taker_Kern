const api = require("express").Router();
const fs = require("fs");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

api.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
});

api.post("/notes", (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;

  const newNote = {
    title,
    text,
  };

  fs.appendFile("./db/db.json", newNote, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });

  const response = {
    status: "success",
    body: newNote,
  };

  res.json(response);
});

module.exports = api;

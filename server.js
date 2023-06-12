const express = require("express");
const path = require("path");
const dbData = require("./db/db.json");
const PORT = 3001;

const app = espress();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", (req, res) => res.json(dbData));

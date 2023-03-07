"use strict";

const express = require("express");
const router = express.Router();

const { records } = require("../../models/index");

router.get("/records", getRecords);
router.post("/records", createRecord);
router.delete("/records/:id", deleteRecord);

async function getRecords(req, res) {
  try {
    const recordsList = await records.findAll({});
    res.status(200).json(recordsList);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createRecord(req, res) {
  try {
    console.log(req.body)
    const record = req.body;
    const newRecord = await records.create(record);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteRecord(req, res) {
  try {
    const id = parseInt(req.params.id);
    console.log(id);
    await records.destroy({where: {id: id}})
    return res.status(204).send("Deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = router;

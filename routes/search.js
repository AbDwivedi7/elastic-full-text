import express from 'express';
import { searchDoc } from '../middleware/searchDoc';
const fileSystem = require('fs')
const path = require('path');


const router = express.Router();

// Endpoint to insert the data
router.get('/search', async (req, res) => {
  try {
    const queryParam = req.query.q;
    const result = await searchDoc.getDocs(queryParam);
   res.status(200).send({ message: "success", result: result});
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "failed" });
  }
});

export { router };
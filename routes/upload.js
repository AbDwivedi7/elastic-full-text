import express from 'express';
import { insertedDoc } from '../middleware/insertDoc';


const router = express.Router();

// Endpoint to upload the data
router.get('/', async (req, res) => {
  try {
    const insertedDocs = await insertedDoc.insert();
    console.log(insertedDocs)
    res.status(200).send({ message: "success", result: "file uploaded"});
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "failed" });
  }
});

export { router };
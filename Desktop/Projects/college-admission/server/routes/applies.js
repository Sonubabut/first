import express from "express";
import {getDetails, getDetailsById, createDetails, updateDetails, deleteDetails } from "../controllers/applies.js";


const router = express.Router();

router.get('/', getDetails);

router.get('/:id', getDetailsById);

// router.get('/:id', getDetailsStatus);

router.post('/', createDetails);

router.put('/:id', updateDetails);

router.delete('/:id', deleteDetails);



export default router
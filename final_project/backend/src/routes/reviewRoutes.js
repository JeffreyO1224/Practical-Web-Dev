import express from "express";
import Review from '../models/reviewModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.getAllReviews();
        res.status(201).json({ reviews });
    } catch (err) {
        console.log(err);
    }
});

export default router;
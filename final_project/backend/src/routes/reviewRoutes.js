import express from "express";
import Review from '../models/reviewModel.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.getAllReviews();
        res.status(201).json({ reviews });
    } catch (err) {
        console.log(err);
    }
});

router.post('/', upload.none(), async (req, res) => {
    try {
        const result = await Review.createReview(req.body);
        res.status(201).json({ result });
    } catch (err) {
        console.log(err);
        res.status(400).json({error: "Review Creation Failed"});
    }
})

router.put('/:id', upload.none(), async (req, res) => {
    try {
        const result = await Review.editReview(req.params.id, req.body);
        res.status(201).json({ result });
    } catch (err) {
        console.log(err);
        res.status(400).json({error: "Failed to Edit Review"});
    }
})

router.delete('/:id', upload.none(), async (req, res) => {
    try {
        const result = await Review.deleteReview(req.params.id);
        res.status(201).json({ result });
    } catch (err) {
        console.log(err);
        res.status(400).json({error: "Failed to Delete Review"});
    }
})

export default router;
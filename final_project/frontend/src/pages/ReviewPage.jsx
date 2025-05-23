import { useEffect, useState } from 'react';
import axios from 'axios';
import JeffreyCard from "../components/JeffreyCard";
import Review from '../components/Review';
import RatingScore from "../components/RatingScore";
import './ReviewPage.css';

export default function ReviewPage() {
    const [reviews, setReviews] = useState(null);


    useEffect(() => {
        const getAllReviews = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/reviews/");
                setReviews(data.reviews);
            } catch (err) {
                console.log('Failed to get reviews:', err);
            }
        };
        getAllReviews();
    }, []);
    
    const ReviewCards = reviews ? reviews.map((review, index) => {
            return (
            <Review 
                key={index} 
                title={review.title} 
                reviewer={review.reviewer} 
                rating={review.rating} 
                reviewText={review.content}
                createdAt={review.createdAt}
            />)
            }
        ) : null;

    return (
        <div id='review-page'>
            <JeffreyCard />
            <div id='ratings-side'>
                <RatingScore ratings={reviews}/>
                {ReviewCards}
            </div>
        </div>
    );
}
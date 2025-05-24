import { useEffect, useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import axios from 'axios';
import JeffreyCard from "../components/JeffreyCard";
import Review from '../components/Review';
import RatingScore from "../components/RatingScore";
import ReviewForm from "../components/ReviewForm";
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
        const timestamp = new Timestamp(review.createdAt.seconds, review.createdAt.nanoseconds);
        const date = new Date(timestamp.toDate().toString());
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours() === 12 || date.getHours() === 0 ? 12 : date.getHours()%12;
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

        const createdAt = `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
            return (
                <div style={{paddingTop: '2%'}}>
                    <Review 
                        key={index}
                        id={review.id}
                        title={review.title} 
                        reviewer={review.reviewer} 
                        rating={review.rating} 
                        reviewText={review.content}
                        createdAt={createdAt}
                        timestamp={date}
                    />
                </div>
            )
            }
        ) : null;

    return (
        <div id='review-page'>
            <JeffreyCard />
            <div id='ratings-side'>
                <RatingScore ratings={reviews}/>
                <ReviewForm />
                {ReviewCards}
            </div>
        </div>
    );
}
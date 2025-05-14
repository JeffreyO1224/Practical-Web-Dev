import { useState } from 'react';
import RatingBar from './RatingBar';
import './RatingScore.css';

export default function RatingScore() {
    const [score, setScore] = useState(5.0);

    // Pull score from all reviews from the db and setScore

    // Pull all reviews from db


    return (
        <div id='rating-score'>
            <h1>Rating: {score}/5.0</h1>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '3rem', color: '#f1c40f' }}>
                {'★'.repeat(Math.round(score))}{'☆'.repeat(5 - Math.round(score))}
                </div>
                <RatingBar rating={5} amount={100} percentage={.70} />
                <RatingBar rating={4} amount={43} percentage={.3} />
                <RatingBar rating={3} amount={0} percentage={0} />
                <RatingBar rating={2} amount={0} percentage={0} />
                <RatingBar rating={1} amount={0} percentage={0} />
            </div>
        </div>
    )
}
import { useEffect, useState } from 'react';
import RatingBar from './RatingBar';
import './RatingScore.css';

export default function RatingScore({ratings}) {
    const [score, setScore] = useState(0.0);

    const distribution = [1, 2, 3, 4, 5].map((star) => {
                if (ratings) {
                    const count = ratings.filter((r) => r.rating === star).length;
                    return {
                        star,
                        count: count,
                        percentage: count / ratings.length
                    }
                } else {
                    return {
                        star,
                        count: 0,
                        percentage: 0
                    }
                }
            });

    useEffect(() =>
        {
            if (!ratings) return;
            else if (ratings.length > 1) setScore(ratings.reduce((a, b) => a + b.rating, 0) * 1.0 / ratings.length);
            else if (ratings.length == 1) setScore(ratings[0].rating * 1.0);
        }
    , [ratings]);

    return (
        <div id='rating-score'>
            <h1>Rating: {score}/5.0</h1>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '3rem', color: '#f1c40f' }}>
                {'★'.repeat(Math.round(score))}{'☆'.repeat(5 - Math.round(score))}
                </div>
                <div id='rating-bar'>
                    <RatingBar rating={5} amount={distribution[4].count} percentage={distribution[4].percentage} />
                </div>
                <div id='rating-bar'>
                    <RatingBar rating={4} amount={distribution[3].count} percentage={distribution[3].percentage} />
                </div>
                <div id='rating-bar'>
                    <RatingBar rating={3} amount={distribution[2].count} percentage={distribution[2].percentage} />
                </div>
                <div id='rating-bar'>
                    <RatingBar rating={2} amount={distribution[1].count} percentage={distribution[1].percentage} />
                </div>
                <div id='rating-bar'>
                    <RatingBar rating={1} amount={distribution[0].count} percentage={distribution[0].percentage} />
                </div>
            </div>
        </div>
    )
}
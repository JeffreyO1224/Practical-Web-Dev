import './Review.css';
import { useState } from 'react';

function ReadMore( reviewText, setReadMore, setMoreText, setDots, setMaxHeight ) {
    
}

export default function Review({title, reviewer, rating, reviewText, createdAt}) {
    const [ readMore, setReadMore ] = useState(false);
    const [ reviewTextLess, setReviewTextLess ] = useState(reviewText);
    const [ dots, setDots ] = useState('');
    const [ moreText, setMoreText ] = useState('');
    const [ maxHeight, setMaxHeight ] = useState('30vh');

    if (reviewTextLess.length > 300) {
        setReviewTextLess(reviewText.substring(0, 300));
        setDots('...');
    }

    return (
        <div id='review-box' style={{
            border: 'none',
            borderRadius: '1rem',
            boxShadow: '0px 0px 4px',
            width: '50vw',
            maxHeight: maxHeight,
        }}>
            <div style={{margin: '2%'}}>
                <div>
                    <div style={{ fontSize: '1rem', color: '#f1c40f' }}>
                    {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
                    </div>
                    <h2 id='title'>{title}</h2>
                </div>
                <h3>{reviewer}</h3>
                <p id='review-text-less'style={{
                    flexWrap: 'wrap',
                }}>
                    {reviewTextLess}
                    <span id='dots'>{dots}</span>
                    <span id='review-text-more'>{moreText}</span>
                </p>
                <button style={{
                    color: 'grey',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontFamily: "Merriweather, serif",
                }}
                onClick={() => {
                    setReadMore(true);
                    setDots('');
                    setMoreText(reviewText.substring(300, reviewText.length));
                    setMaxHeight('none');
                }}>
                    Read More
                </button>
            </div>
        </div>
    );
}
import { useState } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';

export default function Review({id, title, reviewer, rating, reviewText, createdAt, timestamp}) {
    const [ readMore, setReadMore ] = useState(false);
    const [ readMoreButtonText, setReadMoreButtonText ] = useState('Read More');
    const [ reviewTextLess, setReviewTextLess ] = useState(reviewText);
    const [ dots, setDots ] = useState('');
    const [ moreText, setMoreText ] = useState('');
    const [ maxHeight, setMaxHeight ] = useState('33vh');
    const [ needsMore, setNeedsMore ] = useState(false);
    const [ isEditing, setIsEditing ] = useState(false);

    if (reviewTextLess.length > 300) {
        setReviewTextLess(reviewText.substring(0, 300));
        setDots('...');
        setNeedsMore(true);
    }

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this review?')) {
            try {await axios.delete(
                `http://localhost:8080/reviews/${id}`,
            );} catch (err) {
                console.error(err);
            }
            window.location.reload();
        }
    }

    const ReadMoreButton = () => {
        if (needsMore) {
            if (readMoreButtonText === 'Read More') return (<button style={{
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
                        setReadMoreButtonText('Read Less');
                    }}>
                        {readMoreButtonText}
                    </button>
                );
            else return (<button style={{
                        color: 'grey',
                        cursor: 'pointer',
                        border: 'none',
                        backgroundColor: 'transparent',
                        fontFamily: "Merriweather, serif",
                    }}
                    onClick={() => {
                        setReadMore(false);
                        setDots('...');
                        setMoreText('');
                        setMaxHeight('33vh');
                        setReadMoreButtonText('Read More');
                    }}>
                        {readMoreButtonText}
                    </button>);
        }
    }

    return isEditing === false ? (
        <div id='review-box' style={{
            border: 'none',
            borderRadius: '1rem',
            boxShadow: '0px 0px 4px',
            width: '50vw',
            maxHeight: maxHeight,
        }}>
            <div style={{padding: '2%'}}>
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{createdAt}</p>
                    <div>
                        <button id='edit-button' onClick={() => setIsEditing(true)} style={{
                            padding: '8px 16px',
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            height: 'auto',
                            minHeight: '5vh',
                            width: '5vw',
                            fontSize: '115%',
                            fontWeight: 'bold',
                        }}>Edit</button>
                        <button id='edit-button' onClick={handleDelete} style={{
                            padding: '8px 16px',
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            height: 'auto',
                            minHeight: '5vh',
                            width: '5vw',
                            fontSize: '115%',
                            fontWeight: 'bold',
                        }}>Delete</button>
                    </div>
                </div>
                
                {<ReadMoreButton />}
            </div>
        </div>
    ) : (
        <ReviewForm 
            oldId={id}
            oldTitle={title}
            oldRating={rating}
            oldReviewText={reviewText}
            oldCreatedAt={timestamp}
            isEditing={isEditing}
            setIsEditing={(value) =>  setIsEditing(value)}
        />
    )
}
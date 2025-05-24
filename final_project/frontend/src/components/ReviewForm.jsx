import {useState, useEffect} from 'react';
import {serverTimestamp, Timestamp} from 'firebase/firestore';
import axios from 'axios';
import './ReviewForm.css';

export default function ReviewForm({oldId, oldTitle, oldRating, oldReviewText, oldCreatedAt, isEditing, setIsEditing}) {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(5);
    const [errorMessage, setErrorMessage] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [createdAt, setCreatedAt] = useState(null);

    useEffect(() => {
        if (oldTitle && oldRating && oldReviewText) {
            setTitle(oldTitle);
            setRating(oldRating);
            setContent(oldReviewText);
            setCreatedAt(oldCreatedAt);
            setShowForm(true);
        }
    }, []);

    async function handleSubmit() {
        try {
            const formData = new FormData();
            formData.append('content', content);
            formData.append('reviewer', 'Anonymous');
            formData.append('rating', rating);
            formData.append('title', title);
            createdAt === null ? formData.append('createdAt', serverTimestamp()) :
                                  formData.append('createdAt', createdAt);

            for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

            const response = isEditing === false ? 
                await axios.post(
                    "http://localhost:8080/reviews/",
                    formData
                ) : 
                await axios.put(
                    `http://localhost:8080/reviews/${oldId}`,
                    formData
                );
            setErrorMessage('');
            window.location.reload();
        } catch (err) {
            console.error(err);
            setErrorMessage('Failed to submit review');
        }
    }

    return (
        <div id='review-form'>
                    {showForm ? (
                      <div id='form'>
                        <div style={{ marginBottom: '12px' }}>
                          <label style={{
                            fontSize: '2vh',
                            fontWeight: 'bold'
                          }}>Title:<br />
                            <input id='form-input'type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                          </label>
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                          <label style={{
                            fontSize: '2vh',
                            fontWeight: 'bold'
                          }}>Review:<br />
                            <textarea id='form-input'
                              value={content}
                              onChange={(e) => setContent(e.target.value)}
                              rows={3}
                            />
                          </label>
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                          <label style={{ fontSize: '2vh', fontWeight: 'bold'}}>
                          Rating:
                            <select
                              value={rating}
                              onChange={(e) => setRating(parseInt(e.target.value))}
                              style={{ marginLeft: '12px', padding: '4px', borderRadius: '4px',fontSize: '1.5vh', fontWeight: 'bold' }}
                            >
                              {[5, 4, 3, 2, 1].map((star) => (
                                <option key={star} value={star}>{star} ★</option>
                              ))}
                            </select>
                          </label>
                        </div>

                        {errorMessage && <div className='error-message'>{errorMessage}</div>}
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <button id='cancel-button'
                            onClick={() => {
                              if (isEditing) setIsEditing(false);
                              setShowForm(false);
                              setContent('');
                              setRating(5);
                              setTitle('');
                            }}
                          >
                            Cancel
                          </button>
                          <button id='submit-button' onClick={handleSubmit}>Submit</button>
                        </div>
                      </div>
                    ) : (
                      <button id='create-review-button' onClick={() => setShowForm(true)}>Add Your Rating</button>
                    )}
                  </div>
    )
}
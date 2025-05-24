import firestore from '../firebase/firebase.js';
import { getDocs, setDoc, addDoc, deleteDoc, collection, doc, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';

export default class Review {
    static async getAllReviews() {
        const collectionRef = collection(firestore, 'reviews')
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        var reviews = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return reviews;
    }

    static async createReview(review) {
        const collectionRef = collection(firestore, "reviews");
        const payload = {
            content: review.content,
            reviewer: review.reviewer,
            rating: parseInt(review.rating),
            createdAt: serverTimestamp(),
            title: review.title
        };
        await addDoc(collectionRef, payload);
    }

    static async editReview(reviewId, review) {
        const docRef = doc(firestore, 'reviews', reviewId);
        const createdAt = new Date(review.createdAt);
        const payload = {
            content: review.content,
            reviewer: review.reviewer,
            rating: parseInt(review.rating),
            createdAt: Timestamp.fromDate(createdAt),
            title: review.title
        };
        await setDoc(docRef, payload);
    }

    static async deleteReview(reviewId) {
        const docRef = doc(firestore, 'reviews', reviewId);
        await deleteDoc(docRef)
    }
}
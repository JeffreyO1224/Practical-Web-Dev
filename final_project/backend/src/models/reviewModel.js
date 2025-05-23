import firestore from '../firebase/firebase.js';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';

export default class Review {
    static async getAllReviews() {
        const collectionRef = collection(firestore, 'reviews')
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        var reviews = snapshot.docs.map((review) => review.data());
        return reviews;
    }
}
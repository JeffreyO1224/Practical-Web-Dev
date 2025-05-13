import JeffreyCard from "../components/JeffreyCard";
import Review from '../components/JeffreyCard';
import RatingScore from "../components/RatingScore";
import './ReviewPage.css';

export default function ReviewPage() {
    return (
        <div id='review-page'>
            <JeffreyCard />
            <div id='ratings-side'>
                <RatingScore />
            </div>
        </div>
    );
}
import JeffreyCard from "../components/JeffreyCard";
import Review from '../components/Review';
import RatingScore from "../components/RatingScore";
import './ReviewPage.css';

export default function ReviewPage() {
    const fakeReview = "I had the distinct pleasure of working alongside Jeffrey over the course of two years at a fast-paced, high-stakes software development firm, and I can say—without hesitation—that he is one of the most driven, detail-oriented, and intellectually curious professionals I've ever encountered. From the very beginning, Jeffrey stood out not just for his technical skills (which are superb), but for his exceptional emotional intelligence and ability to lead quietly, yet effectively. He was often the glue that held cross-functional teams together—equally at ease discussing front-end design decisions with UI/UX designers as he was diving into back-end architecture with the DevOps team. What impressed me most about Jeffrey was his deep ownership over everything he touched. He doesn’t treat work as “tasks” to complete—he treats it as a craft to refine. During one particularly intense product cycle, he voluntarily took on a broken legacy module that had been passed around for months with no progress. Within a week, he not only stabilized the system but improved its performance by over 60%, all while documenting everything so that the next person wouldn’t face the same nightmare. Jeffrey is also incredibly generous with his knowledge. Junior developers would often gather around him not because they had to, but because they wanted to. He created a weekly “Tech Tea” session—half mentorship, half coffee break—where people would discuss new tools, design patterns, or even just talk about impostor syndrome in tech. It humanized the work in a way that made a real impact on morale. Outside of technical contributions, Jeffrey is an active advocate for diversity and inclusion in tech. He spearheaded a partnership with a local college to create an internship pipeline for underrepresented students in STEM, resulting in 4 new hires in one year. That’s just who he is—someone who sees a need and quietly steps up. If I were building a team from scratch, Jeffrey would be the first person I’d call. He’s the kind of person who raises the bar simply by being in the room. Reliable, humble, incredibly bright, and just an all-around joy to work with—Jeffrey is the real deal."

    return (
        <div id='review-page'>
            <JeffreyCard />
            <div id='ratings-side'>
                <RatingScore />
                <Review reviewer='Jeffreys Mom' title='Amazing Person' rating={5} reviewText={fakeReview}/>
            </div>
        </div>
    );
}
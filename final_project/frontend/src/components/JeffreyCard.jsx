import jeffreyImg from '../assets/jeffreyHeadshot.jpg';
import linkedInLogo from '../assets/linkedInLogo.png';
import './JeffreyCard.css';

export default function JeffreyCard() {
    return (
        <div id='jeffrey-card'>
            <img src={jeffreyImg} id='jeffrey-img'/>
            <div id='name-and-contact'>
                <h1>Jeffrey Oyuela</h1>
                <a href='https://linkedin.com/in/jeffreyoyuela/' target='_blank'>
                    <img src={linkedInLogo} id='linkedin-logo'/>
                </a>
            </div>
            <h3>Education: CUNY Hunter College</h3>
            <h3>Occupation: Software Engineer</h3>
            <h3>Company: Amazon</h3>
            <h3>Email: jeffreyoyuela@gmail.com</h3>
        </div>
        
    );
}
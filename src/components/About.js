import '../styles/About.css';
import FadeComponent from './FadeComponent';

import profile from './images/profile.jpg';

const About = () => {
    return (
        <FadeComponent>
            <div className="aboutContainer" id="about">
                <div className="about">
                    <h1 className="title">about me</h1>
                    <p className="blurb">I am currently studying Computer Science at <a href="https://utdallas.edu">The University of Texas at Dallas</a> along with a minor in Music. I've most recently worked as an Artificial
                    Intelligence Intern at <a href="https://forwardedge-ai.com">Forward Edge-AI</a>.</p>
                    <p className="blurb">I am fascinated by machine learning and enjoy leveraging its use with full-stack and game development. I enjoy playing the piano, working out, and typing <a href="https://data.typeracer.com/pit/profile?user=arugyani">really fast</a>.</p>
                </div>
                <img src={profile} alt="Portrait of Aru"/>
            </div>
        </FadeComponent>
    );
};

export default About;
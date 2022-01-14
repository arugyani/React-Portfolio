import FadeComponent from './FadeComponent';

import '../styles/Experience.css';

const Experience = () => {
    return (
        <div className="experienceContainer" id="experience">
                <div className="experience">
                    <FadeComponent>                
                    {/* <div className="title">work experience</div> */}

                    <h2 className="role">Artificial Intelligence Intern</h2>
                    <a className="company" href="https://forwardedge-ai.com/">Forward Edge-AI</a>

                    <p className="tasks">Developed high-efficiency machine learning models for bacterial pathogen and scam call detection using industry-standard practices.</p>
                    <p className="tasks">Led an Agile team in hand-validating a scam call dataset and fully transferred PostGreSQL - HoneyPot service across various cloud platforms.</p>
                    </FadeComponent>
                </div>

                <div className="experience">
                    <FadeComponent>
                    <h2 className="role">Codubee Mentee</h2>
                    <a className="company" href="https://codubee.com/">Codubee</a>

                    <p className="tasks">Worked in an agile development team to create TranslateNews, an application powered by React, Node, and REST APIs, that allows users to translate the latest news into their desired language.</p>
                    <p className="tasks"></p>
                    </FadeComponent>
                </div>
            </div>
    );
}

export default Experience;
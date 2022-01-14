import '../styles/Header.css';

import FadeComponent from './FadeComponent';
import Typist from 'react-typist';

const Header = () => {
    return (
        <div className="header">
            <FadeComponent>
                <div className="information">
                    <Typist className="introduction" avgTypingDelay={120}>Hey! I'm <span class="name">Aru Gyani</span>.</Typist>

                    <div className="caption">
                        <a className="reference" href="#about">student</a>
                        <a className="reference" href="#experience">software developer</a>
                        <a className="reference" href="#about">pianist</a>
                    </div>

                    <a className="mouse" href="#about"><div className="scroller"></div></a>
                </div>
            </FadeComponent>
        </div>
    );
};

export default Header;
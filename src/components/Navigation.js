import React from 'react';
import '../styles/Navigation.css';

import { GitHub, LinkedIn } from '@mui/icons-material';
import FadeComponent from './FadeComponent';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Navigation() {
    return (
        <div className="navigation">
            <FadeComponent>
                <navbar>
                    <h3 className="header"><a className="home" href="/">Aru Gyani</a></h3>
    
                    <ul>
                        <li><a className="link scroll" href="#about">About</a></li>
                        <li><a className="link scroll" href="mailto:gyaniaru@gmail.com">Contact</a></li>
                        <li><a className="link redirect" href="https://github.com/AruGyani"><GitHub /></a></li>
                        <li><a className="link redirect" href="https://linkedin.com/in/arugyani"><LinkedIn /></a></li>
                    </ul>
                    <DarkModeOutlinedIcon className="link redirect darkAnimate"/>
                </navbar>
            </FadeComponent>
        </div>
    );  
}

export default Navigation;
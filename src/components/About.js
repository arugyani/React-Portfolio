import "../styles/About.css";
import FadeComponent from "./FadeComponent";

import profile from "./images/profile.jpg";

const About = () => {
  return (
    <FadeComponent>
      <div className='aboutContainer' id='about'>
        <div className='about'>
          <h1 className='title'>about me</h1>
          <p className='blurb'>
            Computer Science @{" "}
            <a href='https://utdallas.edu'>The University of Texas at Dallas</a>{" "}
          </p>
          <p className='blurb'>
            I am an aspiring software engineer with a passion for innovation.
          </p>
          <p className='blurb'>
            I am fascinated by the art of UI/UX and aim to create beautiful
            experiences across the web.
          </p>
          <p className='blurb'>
            I enjoy playing the piano, lifting <em>weights</em>, and typing{" "}
            <a href='https://monkeytype.com/profile/gyani'>really fast</a>.
          </p>
        </div>
        <img src={profile} alt='Portrait of Aru' />
      </div>
    </FadeComponent>
  );
};

export default About;

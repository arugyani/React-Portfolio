import FadeComponent from "./FadeComponent";

import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className='experienceContainer' id='experience'>
      <div className='experience'>
        <FadeComponent>
          <h2 className='role'>SWE Intern</h2>
          <a className='company' href='https://www.ncr.com'>
            NCR corporation
          </a>
        </FadeComponent>
      </div>
      <div className='experience'>
        <FadeComponent>
          <h2 className='role'>Co-Founder</h2>
          <a className='company' href='https://www.magnumop.us'>
            Opus Careers
          </a>
        </FadeComponent>
      </div>
      <div className='experience'>
        <FadeComponent>
          <h2 className='role'>AI Engineering Intern</h2>
          <a className='company' href='https://forwardedge-ai.com/'>
            Forward Edge-AI
          </a>
        </FadeComponent>
      </div>
    </div>
  );
};

export default Experience;

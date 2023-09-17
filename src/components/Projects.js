import "../styles/Projects.css";
import FadeComponent from "./FadeComponent";

const Projects = () => {
  return (
    <FadeComponent>
      <div className='projects'>
        <div className='row'>
          <a className='project' href='https://devpost.com/software/curtainfy'>
            <h2 className='projectTitle'>curtainfy</h2>
            <p className='projectCaption'>
              <strong>
                HackDFW 2022 Grand Prize & Google Sponsor Challenge Winner
              </strong>
              <br />
              <br />
              Tracks the temperature & solar intensities around your house to
              automate curtain usage in order to optimize energy usage within
              the building by up to 33%!
            </p>
          </a>

          <a className='project' href='https://github.com/AruGyani/ichos'>
            <h2 className='projectTitle'>ichos</h2>
            <p className='projectCaption'>
              DiscordJS music bot powered by YouTube API v3
            </p>
          </a>
        </div>

        <div className='row'>
          <a
            className='project'
            href='https://github.com/AruGyani/sorting-algorithm-visualizer'
          >
            <h2 className='projectTitle'>Java Sort</h2>
            <p className='projectCaption'>
              Sorting Algorithm Visualizer developed in Java
            </p>
          </a>

          <a
            className='project'
            href='https://github.com/AruGyani/flower-network'
          >
            <h2 className='projectTitle'>Iris Classifier</h2>
            <p className='projectCaption'>
              Feed-forward Artificial Neural Network build from scratch in Java
              for classifying Iris flowers.
            </p>
          </a>

          <a
            className='project'
            href='https://github.com/AruGyani/string-genetics'
          >
            <h2 className='projectTitle'>String Genetics</h2>
            <p className='projectCaption'>
              Application of genetic fitness algorithm for modeling strings
              using char arrays.
            </p>
          </a>
        </div>
      </div>
    </FadeComponent>
  );
};

export default Projects;

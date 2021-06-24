import './App.css';
import imagesSpv from './images/icon-supervisor.svg';
import imagesTb from './images/icon-team-builder.svg';
import imagesKarma from './images/icon-karma.svg';
import imagesCalc from './images/icon-calculator.svg';

function App() {
  return (
    <div class='MainContainer'>
      <div className='header'>
        <h1>Reliable, efficient delivery <span>Powered by Technology</span></h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful
        </p>
      </div>

      <div className='cardContainer'>
        <div className='card a'>
          <div className='cardInterior'>
            <h1>Supervisor</h1>
            <p>Monitors activity to identify project roadblocks</p>
            <img src={imagesSpv} alt='magnifier' />
          </div>
        </div>
        <div className='card b'>
          <div className='cardInterior'>
            <h1>Team Builder</h1>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src={imagesTb} alt='magnifier' />
          </div>
        </div>
        <div className='card c'>
          <div className='cardInterior'>
            <h1>Karma</h1>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={imagesKarma} alt='magnifier' />
          </div>
        </div>
        <div className='card d'>
          <div className='cardInterior'>
            <h1>Calculator</h1>
            <p>Uses data from past projects to provide better delivery estimatess</p>
            <img src={imagesCalc} alt='magnifier' />
          </div>
        </div>
      </div>
      <div>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/azzykesuma">Azzy</a>.
        </p>
      </div>
  </div>
  );
}

export default App;

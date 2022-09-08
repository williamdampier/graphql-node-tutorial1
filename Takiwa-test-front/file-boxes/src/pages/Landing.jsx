import main from '../assets/images/main.svg';
import { Logo } from '../components';

import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            App <span>for storing and sharing</span> CSV boxes
          </h1>
          <p>Welcome to File Boxes!</p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
        </div>
        <img src={main} alt='file boxes' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;

import Wrapper from '../assets/wrappers/Navbar';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='nav-center'>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.username}
            <FaCaretDown />
          </button>

          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

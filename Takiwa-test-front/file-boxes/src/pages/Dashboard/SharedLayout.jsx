import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Navbar } from '../../components';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className='dashboard-page'>
          <Navbar />
          <div className='dashboard'>
            <Outlet />
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;

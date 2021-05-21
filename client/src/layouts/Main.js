import { Outlet } from 'react-router';
import { Header, Profile } from '../components';

export const Main = (props) => {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

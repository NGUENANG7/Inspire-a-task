import { Link } from 'react-router-dom';
import LoginButton from './LoginBtn';
import LogoutButton from './LogoutBtn';

export const Header = () => {
  return (
    <div className=" text-center m-4">
      {' '}
      <div className="border-8 border-fuchsia-600 m-2 ">
        <h1 className="m-3 p-4 text-center text-8xl"> Inspire-A-Task</h1>{' '}
      </div>
      <p className="text-lg">The microtask app that inspires all</p>{' '}
      <div className="min-w-full">
        <Link
          to="/"
          className="transform hover:scale-300 hover:bg-purple-700 hover:text-white"
        >
          <span>Home</span>
        </Link>
        <Link
          to="/TaskPage"
          className="transform hover:scale-300 hover:bg-purple-700 hover:text-white"
        >
          <span> | Task Page</span>
        </Link>
        <Link
          to="/Reward"
          className="transform hover:scale-300 hover:bg-purple-700 hover:text-white"
        >
          <span> | Reward Page</span>
        </Link>
        {/* <Link to="/Profile">
        <span className="lead"> || Profile Page</span>
      </Link> */}
        <div className="transform hover:scale-300 hover:bg-purple-700 hover:text-white">
          {' '}
          <LoginButton></LoginButton>
        </div>
        <div className="transform hover:scale-300 hover:bg-purple-700 hover:text-white">
          <LogoutButton></LogoutButton>
        </div>
      </div>
    </div>
  );
};

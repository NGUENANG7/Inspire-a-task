import { Link } from 'react-router-dom';
import LoginButton from './LoginBtn';
import LogoutButton from './LogoutBtn';

export const Header = () => {
  return (
    <div className=" text-center m-4">
      {' '}
      <h1 className="border-8 border-fuchsia-600 m-3 text-center text-8xl">
        {' '}
        Inspire a Task
      </h1>{' '}
      <p className="display-4">The microtask app that inspires all</p>{' '}
      <Link to="/">
        <span className="lead">Home</span>
      </Link>
      <Link to="/TaskPage">
        <span className="lead"> || Task Page</span>
      </Link>
      <Link to="/Reward">
        <span className="lead"> || Reward Page</span>
      </Link>
      <Link to="/Profile">
        <span className="lead"> || Profile Page</span>
      </Link>
      <div>
        {' '}
        <LoginButton /> <LogoutButton />{' '}
      </div>
    </div>
  );
};

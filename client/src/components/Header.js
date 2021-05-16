import { Link } from 'react-router-dom';
import LoginButton from './LoginBtn'
import LogoutButton from './LogoutBtn'

export const Header = () => {
  return (
  
    <div className=" text-center m-4">
      {' '}
      <h1 className=" display-2"> Inspire a Task</h1>{' '}
      <p className="display-4">The microtask app that inspires all</p>
      
        {' '}
        <Link to="/">
          <span className="lead">Home</span>
        </Link>
        <Link to="/TaskPage">
          <span className="lead"> || Task Page</span>
        </Link>

  <div>  <LoginButton/>  <LogoutButton/>   </div>
    </div>
  
  );
};

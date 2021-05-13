import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className=" text-center m-4">
      {' '}
      <h1 className=" display-2"> Inspire a Task</h1>{' '}
      <p className="display-4">The microtask app that inspires all</p>
      <p>
        {' '}
        <Link to="/">
          <span className="lead">Your tasklist awaits |</span>
        </Link>
        <Link to="/TaskPage">
          <span className="lead">| ??</span>
        </Link>
      </p>
    </div>
  );
};

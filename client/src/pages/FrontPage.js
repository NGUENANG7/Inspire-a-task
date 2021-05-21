import { useAuth0 } from '@auth0/auth0-react';
export const FrontPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('USER on front page!!!', user);
  return <div style={{display: 'flex', justifyContent: 'center'}}>Welcome to Inspire-A-Task!</div>;
};

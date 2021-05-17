import { useAuth0 } from '@auth0/auth0-react';
export const FrontPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('USER on front page!!!', user);
  return <div>This is a front page.</div>;
};

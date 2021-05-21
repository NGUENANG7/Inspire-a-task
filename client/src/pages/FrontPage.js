import { useAuth0 } from '@auth0/auth0-react';
export const FrontPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('USER on front page!!!', user);
  return <div style={{display: 'flex', justifyContent: 'center'}} class="front-page">Welcome to Inspire-A-Task! This is a microtask app that allows you to create a task list and rewards you with 10 minutes on your favorite social media site. This application provides a solution for the modern issue of balancing work and time spent on social media websites. With a user's created tasklist, the user can see and mark off their tasks before going on their 10 minute social media break. If this is your first time using our application, all you need to do is sign in using your Google account to begin.</div>;
};

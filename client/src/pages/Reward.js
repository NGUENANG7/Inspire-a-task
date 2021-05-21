import React from 'react';
import { Timer } from '../components';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';
// import { useNavigate } from 'react-router-dom';

export const Reward = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const navigate = useNavigate();
  if (isLoading === false && isAuthenticated === false) {
    return (
      <div className="m-3 text-center text-3xl font-mono">
        {' '}
        Please press the login button above to login.
      </div>
    );
    // navigate('/');
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <div class="reward-container icons">
          <div className="float-left">
            <h1>
              <span className="text-purple-600">Task Countdown</span> - You have
              a 10 minute break
            </h1>

            <Timer />
          </div>
          <div className="float-right">
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 border border-blue-700 rounded">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="max-h-20"
                  src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/youtube.png"
                  alt="YouTube logo"
                ></img>
                Youtube
              </a>
            </button>{' '}
            <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 border border-blue-700 rounded">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="max-h-20"
                  src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/facebook.png"
                  alt="Facebook Icon"
                ></img>
                Facebook
              </a>
            </button>{' '}
            <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 border border-blue-700 rounded">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="max-h-20"
                  src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/instagram.png"
                  alt="Instagram Icon"
                ></img>
                Instagram
              </a>
            </button>{' '}
            <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 border border-blue-700 rounded">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="max-h-20"
                  src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/twitter.png"
                  alt="Twitter Icon"
                ></img>
                Twitter
              </a>
            </button>{' '}
            <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 border border-blue-700 rounded">
              <a
                href="https://www.discord.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="max-h-20"
                  src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/discord.png"
                  alt="Discord"
                ></img>
                Discord
              </a>
            </button>
            <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 border border-blue-700 rounded">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="max-h-20"
                  src="https://project2ejmq.s3.us-east-2.amazonaws.com/images/tiktok.png"
                  alt="TikTok Icon"
                ></img>
                TikTok
              </a>
            </button>
          </div>
        </div>
      </>
    )
  );
};

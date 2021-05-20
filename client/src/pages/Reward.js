import React from 'react'
import '../App.css';

function Reward() {
    return (
        <div class="reward-container icons">
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><a href="https://www.youtube.com/" target="_blank">Youtube</a></button> <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><a href="https://www.facebook.com/" target="_blank">Facebook</a></button> <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><a href="https://www.instagram.com/" target="_blank">Instagram</a></button> <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><a href="https://www.twitter.com/" target="_blank">Twitter</a></button> <span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><a href="https://www.discord.com/" target="_blank">Discord</a></button><span>|| </span>
            <button class="reward-button bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Insert your own link!</button>            
        </div>
    )
}

export default Reward;
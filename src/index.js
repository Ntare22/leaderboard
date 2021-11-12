import { displayScores } from './displayScores.js';
import { postScore } from './postScore.js';
import './style.css';

const refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', () => {
  document.getElementById('scores-list').innerHTML = '';
  document.getElementById('message').innerHTML = '';
  displayScores();
});

displayScores();
postScore();
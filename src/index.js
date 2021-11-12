import { displayScores } from './displayScores.js';
import { postScore } from './postScore.js';

const refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', () => {
  document.getElementById('scores-list').innerHTML = '';
  displayScores();
});

displayScores();
postScore();
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/S3wLmJ68bcC7AHimMnDf/scores/';
const scoresContainer = document.getElementById('scores-list');

const refreshBtn = document.getElementById('refresh-btn');

const data = async () => {
  const dataFromUrl = await fetch(url);
  return dataFromUrl.json();
};

const displayScores = async () => {
  const scores = await data();
  const scoresData = scores.result;

  scoresData.forEach((item) => {
    if (typeof item.user === 'string' && typeof item.score === 'number') {
      const indivScore = `${item.user}: ${item.score}`;
      const scoreItem = document.createElement('li');
      scoreItem.innerHTML = indivScore;
      scoresContainer.append(scoreItem);
    }
  });
};

displayScores();

refreshBtn.addEventListener('click', () => {
  scoresContainer.innerHTML = '';
  displayScores();
});

const postScore = () => {
  const form = document.getElementById('add-form');
  const username = document.getElementById('name');
  const score = document.getElementById('score');
  const responseMessage = document.getElementById('message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const sendObj = {
      user: username.value,
      score: Number(score.value),
    };

    const postData = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(sendObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    const response = await postData.json();
    responseMessage.innerHTML = response.result;
    return response.result;
  });
};

postScore();
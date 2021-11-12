const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/S3wLmJ68bcC7AHimMnDf/scores/';
const scoresContainer = document.getElementById('scores-list');

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

// eslint-disable-next-line import/prefer-default-export
export { displayScores };
const scores = [
  { name: 'Jim', score: '30' },
  { name: 'Ntare', score: '40' },
];

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
const scoresContainer = document.getElementById('scores-list');


const data = async () => {
  const dataFromUrl = await fetch(url);
  return dataFromUrl.json();
}


const displayScores = async (scoreObj) => {
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

const postScore = () => {

  const form = document.getElementById('add-form');
  const username = document.getElementById('name');
  const score = document.getElementById('score');
  const responseMessage = document.getElementById('message')
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const sendObj = {
      user: username.value,
      score: parseInt(score.value)
    }
  
    const postData = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(sendObj),
      headers: { "Content-type": "application/json; charset=UTF-8"}
    });
  
    const response = await postData.json();
    responseMessage.innerHTML = response.result
    console.log(response.result)
    return response.result;
  })
}

postScore();
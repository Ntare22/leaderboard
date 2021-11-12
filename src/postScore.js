const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/S3wLmJ68bcC7AHimMnDf/scores/';

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

    username.value = '';
    score.value = '';

    const response = await postData.json();
    responseMessage.innerHTML = response.result;
    return response.result;
  });
};

// eslint-disable-next-line import/prefer-default-export
export { postScore };
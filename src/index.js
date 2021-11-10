const scores = [
    { name: "Jim", score: "30" },
    { name: "Ntare", score: "40" },
];

const scoresContainer = document.getElementById('scores-list');

scores.forEach((score) => {
    const indivScore = `${score.name}: ${score.score}`;
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = indivScore;
    scoresContainer.append(scoreItem)
})
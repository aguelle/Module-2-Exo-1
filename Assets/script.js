const scores = [
  {
    Nicolas: 629,
    Samir: 857,
    Tom: 483,
    Loanne: 567,
  },
  {
    Nicolas: 234,
    Samir: 647,
    Tom: 737,
    Loanne: 235,
  },
  {
    Nicolas: 962,
    Samir: 346,
    Tom: 346,
    Loanne: 865,
  },
  {
    Nicolas: 317,
    Samir: 347,
    Tom: 853,
    Loanne: 734,
  },
];

console.info("1/ Les scores de la deuxième partie");

console.log(Object.values(scores[1]));

/* ------------------------- */

console.info("2/ La liste des prénoms des joueurs de la première partie");

console.log(Object.keys(scores[0]));

/* ------------------------- */

console.info("3/ Le nombre de parties");

console.log(scores.length);

/* ------------------------- */

console.info("4/ Le score de Tom pour la première partie");

console.log(scores[0].Tom);

/* ------------------------- */

console.info("5/ Le score de Loanne pour la troisième partie");

console.log(scores[2].Loanne);

/* ------------------------- */

console.info("6/ La somme des scores de la deuxième partie");

let scoreGame2 = 0;
for (let index in scores[2]) {
  scoreGame2 += scores[2][index];
}
console.log(scoreGame2);

/* ------------------------- */

console.info("7/ Le gagnant de la première partie");
let scoreWinner = 0;
let winner = "";

for (let win in scores[0]) {
  // console.log(win)
  // console.log(scores[0][win])
  if (scores[0][win] > scoreWinner) {
    scoreWinner = scores[0][win];
    winner = win;
  }
}
console.log(winner);

/* ------------------------- */

console.info("8/ Le perdant de la dernière partie");

let loser = "";
let scoreLoser;

for (let player in scores[3]) {
  if (scoreLoser === undefined || scoreLoser > scores[3][player]) {
    scoreLoser = scores[3][player];
    loser = player;
  }
}
console.log(loser);

/* ------------------------- */

console.info("9/ Le meilleur score de Samir sur toutes les parties");

let bestSamir;

for (let eachScore in scores) {
  if (bestSamir === undefined || bestSamir < scores[eachScore].Samir) {
    bestSamir = scores[eachScore].Samir;
  }
  // console.log(index)
}
console.log(bestSamir);

/* ------------------------- */

console.info("10/ Le pire score de Loanne sur toutes les parties");

let minLoanne;

for (const min in scores) {
  if (minLoanne === undefined || minLoanne > scores[min].Loanne) {
    minLoanne = scores[min].Loanne;
  }
}
console.log(minLoanne);

/* ------------------------- */
/* ------------------------- */

const characters = {
  Godzilla: {
    life: 40,
    xp: 5,
    weapon: 9,
  },
  Kong: {
    life: 40,
    xp: 7,
    weapon: 8,
  },
  Hulk: {
    life: 38,
    xp: 4,
    weapon: 3,
  },
  Aquaman: {
    life: 34,
    xp: 4,
    weapon: 3,
  },
};

/* ------------------------- */

console.info("11/ Affichez toutes les caractéritiques de Hulk.");

console.log(characters.Hulk);

/* ------------------------- */

console.info("12/ Les points d'expérience d'Aquaman");

console.log(characters.Aquaman.xp);

/* ------------------------- */

console.info("13/ Qui est le plus fort entre Godzilla et Kong ?");

console.log();

/* ------------------------- */

console.info("14/ La liste des noms des personnages");

console.log();

/* ------------------------- */

console.info("15/ Le nom du personnage avec le moins de points de vie");

console.log();

/* ------------------------- */

console.info("16/ Qui a l'arme la plus puissante ?");

console.log();

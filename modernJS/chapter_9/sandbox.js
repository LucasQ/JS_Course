const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
]

// players.sort((a, b) => {
//     if (a.score > b.score) {
//         return -1;
//     } else if (b.score > a.score) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

players.sort((a, b) => a - b);

console.log(players);


/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

init();
// document.querySelector('#current-' + activePlayer).textContent = dice;


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

function btn() {
    // do something here
    // calback function
}
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random Number
        dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score if the rolled number was not a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to global score
    scores[activePlayer] += roundScore;


    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
        // // Next Player
        // if (activePlayer === 0) {
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }
    }
});

document.querySelector('.btn-new').addEventListener('click', function() {
    init();
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // ternary
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // reference like a toogle 
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('Winner')
    document.querySelector('.player-1-panel').classList.remove('Winner')
    document.querySelector('.player-0-panel').classList.remove('Winner')
    document.querySelector('.player-1-panel').classList.remove('Winner')
    document.querySelector('.player-0-panel').classList.add('active')
}
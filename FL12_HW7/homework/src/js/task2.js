let randomNumber, userEnteredNumber, prize;
let minNumber = 0, maxNumber = 8;
let mainPrize = 100, prizeForGame = 0, possiblePrize = mainPrize, totalPrize = 0;
let attempt = 0, playAgain = true;
let maxNumberIncrement = 4, prizeMultiplier = 2, gameAttemps = 3;

while (playAgain) {
    if (!confirm('Do you want to play a game?')) {
        alert('You did not become a billionaire, but can.');
    } else {
        randomNumber = Math.round(Math.random() * maxNumber);
    }

    for (attempt; attempt < gameAttemps; attempt++) {
        userEnteredNumber = +prompt('Choose a roulet pocket number from: ' + minNumber + ', to: ' + maxNumber + '\n'
            + 'Attempts left: ' + (gameAttemps - attempt) + '\n'
            + 'Total prize: ' + mainPrize + '\n'
            + 'Possible prize on current attempt: ' + possiblePrize);
        if (userEnteredNumber !== randomNumber) {
            possiblePrize = mainPrize / prizeMultiplier;
            prizeForGame = possiblePrize;
            totalPrize = totalPrize + prizeForGame;
        } else {
            playAgain = confirm('Congratulation, you won! Your prize is: '
                + totalPrize + '$. Do you want to continue?');
            break;
        }
    }

    if (userEnteredNumber !== randomNumber) {
        prize = 0;
        alert('Thank you for your participation. Your prize is: ' + prize + '$');
        playAgain = confirm('Do you want to play again?');
    } else if (userEnteredNumber === randomNumber && !playAgain) {
        alert('Thank you for your participation. Your prize is: ' + prize + '$');
        playAgain = confirm('Do you want to play again?');
    }

    if (playAgain) {
        maxNumber = maxNumber + maxNumberIncrement;
        mainPrize = mainPrize * prizeMultiplier;
        attempt = 0;
    }
}
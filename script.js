let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    Math.floor(Math.random() * 10);
};

function compareGuesses(user_guess, computer_guess, random_number) {
    let user_distance = Math.abs(user_guess - random_number)
    let computer_distance = Math.abs(computer_guess - random_number)

    return user_distance >= computer_distance
};
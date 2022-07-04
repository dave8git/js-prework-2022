const playerNumber = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
const computerNumber =  Math.floor(Math.random() * 3 + 1);
function move(number) {
    return number == 1 ? 'kamień' : (number == 2) ? 'papier' : (number == 3) ? 'nożyce': printMessage('Nie znam takiego ruchu');
}
let playerMove = move(playerNumber);
let computerMove = move(computerNumber); 

function whoWon(playerMove, computerMove) {
  console.log(playerMove);
  console.log(computerMove);
  return ((playerMove == 'kamień' && computerMove == 'nożyce') || (playerMove == 'papier' && computerMove == 'kamień') || (playerMove =='kamień' && computerMove == 'nożyce')) ? printMessage('Wygrywasz!') : printMessage('komputer wygrywa');
}

whoWon(playerMove, computerMove);
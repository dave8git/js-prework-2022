function playGame(number) {
  clearMessages(); 
  const playerNumber = number; // prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
  const computerNumber = Math.floor(Math.random() * 3 + 1);

  function move(number) {
    if (number >= 1 && number <= 3) {
      if (number == 1) {
        return 'kamień';
      } else if (number == 2) {
        return 'papier';
      } else if (number == 3) {
        return 'nożyce';
      }
    } else {
      return printMessage('Nie znam takiego ruchu');
    }

  }

  let argPlayerMove = move(playerNumber);
  let argComputerMove = move(computerNumber);

  function whoWon(argPlayerMove, argComputerMove) {
    console.log(argPlayerMove);
    console.log(argComputerMove);
    if ((argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'kamień') ) {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove === argComputerMove) {
      printMessage('Wygląda na to, że remis...')
    } else {
      printMessage('Skynet wygrywa... :( ');
    }
  }

  whoWon(argPlayerMove, argComputerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){ playGame(1)}); 
document.getElementById('play-paper').addEventListener('click', function() {playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function() {playGame(3)});



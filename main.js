//Data Model
var classic = ['rock', 'paper', 'scissors'];
var challenge = ['rock-chal', 'paper-chal', 'scissors-chal', 'lizard', 'alien'];
var human = {
    wins: 0,
    selection: ''
};
var computer = {
    wins: 0,
    selection: ''
};
var cloneWeapon;
//DOM Variable
//classic
var gameWeapons = document.querySelector('.game-weapons');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var weapons = document.querySelector('.weapons');
var gameChoice = document.querySelector('.game-choice');
var classicGame = document.querySelector('.classic');
var challengeGame = document.querySelector('.challenge');
var differentGameButton = document.querySelector('.button');
var classicBoard = document.querySelector('.classic-game-board');
//challenge
var rockChallenge = document.querySelector('.rock-chal');
var paperChallenge = document.querySelector('.paper-chal');
var scissorChallenge= document.querySelector('.scissors-chal');
var lizard = document.querySelector('.lizard');
var alien = document.querySelector('.alien');
var challengeBoard = document.querySelector('.challenge-game-board');
var challengeGameSection = document.querySelector('.challenge-game');
//Eventlisteners
classicGame.addEventListener('click', showClassicGame);
challengeGame.addEventListener('click', showChallengeGame);
differentGameButton.addEventListener('click', function(){
    returnHome();
    challengeBoard.classList.add('hidden');
} );
gameWeapons.addEventListener('click', function(event){
    if(event.target.className === 'rock') {
        human.selection = 'rock';
    } else if(event.target.className === 'paper'){
        human.selection = 'paper';
    } else if(event.target.className === 'scissors'){
        human.selection = 'scissors';
    }
    createComputer();
});
challengeBoard.addEventListener('click', function(event){
    if(event.target.className === 'rock-chal') {
        human.selection = 'rock-chal';
    } else if(event.target.className === 'paper-chal'){
        human.selection = 'paper-chal';
    } else if(event.target.className === 'scissors-chal'){
        human.selection = 'scissors-chal';
    } else if (event.target.className === 'lizard'){
        human.selection = 'lizard';
    } else if (event.target.className === 'alien'){
        human.selection = 'alien';
    }
    computerChallenge();
    
});
//Event Handlers
function showClassicGame(){
    classicGame.classList.add('hidden');
    challengeGame.classList.add('hidden');
    gameChoice.classList.add('hidden');
    classicBoard.classList.remove('hidden');
    weapons.classList.remove('hidden');
    differentGameButton.classList.remove('hidden');
};
function showChallengeGame(){
    classicGame.classList.add('hidden');
    challengeGame.classList.add('hidden');
    gameChoice.classList.add('hidden');
    challengeBoard.classList.remove('hidden');
    weapons.classList.remove('hidden');
    differentGameButton.classList.remove('hidden');
};
function returnHome(){
     if (showClassicGame){
        classicGame.classList.remove('hidden');
        challengeGame.classList.remove('hidden');
        gameChoice.classList.remove('hidden');
        classicBoard.classList.add('hidden');
        weapons.classList.add('hidden');
        differentGameButton.classList.add('hidden');
    } else if (showChallengeGame){
        classicGame.classList.add('hidden');
        challengeGame.classList.add('hidden');
        gameChoice.classList.remove('hidden');
        challengeBoard.classList.add('hidden');
        weapons.classList.add('hidden');
        differentGameButton.classList.add('hidden');
    } 
};
function resetGameBoard(){
   if (rock){
       rock.classList.remove('hidden');
    }
    if (scissors){
        scissors.classList.remove('hidden');
    }
    if (paper){
        paper.classList.remove('hidden');
   }
   gameWeapons.removeChild(cloneWeapon);
   weapons.innerText = 'Choose your Weapon';
};
function challengeResetGame(){
    if (rockChallenge){
        rockChallenge.classList.remove('hidden');
     }
    if (scissorChallenge){
         scissorChallenge.classList.remove('hidden');
     }
    if (paperChallenge){
         paperChallenge.classList.remove('hidden');
    }
    if (lizard){
        lizard.classList.remove('hidden');
     }
    if (alien){
        alien.classList.remove('hidden');
    }
    challengeGameSection.removeChild(cloneWeapon);
    weapons.innerText = 'Choose your Weapon';
};
//Functions
function getRandomIndex(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
function createComputer(){
    computer.selection = getRandomIndex(classic);
    getResultsClassic();
};
function computerChallenge(){
    computer.selection= getRandomIndex(challenge);
    getResultsChallenge();
};
function getResultsClassic(){
    if((human.selection === 'rock' && computer.selection === 'scissors') || (computer.selection === 'rock' && human.selection === 'scissors')){
        weapons.innerText = `Rock beats Scissors`;
        paper.classList.add('hidden');
        
    } else if ((human.selection === 'paper' && computer.selection === 'rock') || (computer.selection === 'paper' && human.selection === 'rock')){
        weapons.innerText = `Paper beats Rock`;
        scissors.classList.add('hidden');
        
    }else if ((human.selection === 'scissors' && computer.selection === 'paper') || (computer.selection === 'scissors' && human.selection === 'paper')){
        weapons.innerText = `Scissors beats Paper`;
        rock.classList.add('hidden');
       
    }else {
        weapons.innerText = `The game is a Draw`;
        drawGameClassic();
    }
    getWinsClassic();
    setTimeout(function(){
        resetGameBoard();
    }, 5000);
}
function getResultsChallenge(){
    if((human.selection === 'rock-chal' && computer.selection === 'scissors-chal') || (computer.selection === 'rock-chal' && human.selection === 'scissors-chal')){
        weapons.innerText = `Rock beats Scissors`;
        paperChallenge.classList.add('hidden');
        lizard.classList.add('hidden');
         alien.classList.add('hidden');
    } else if ((human.selection === 'paper-chal' && computer.selection === 'rock-chal') || (computer.selection === 'paper-chal' && human.selection === 'rock-chal')){
        weapons.innerText = `Paper beats Rock`;
        scissorChallenge.classList.add('hidden');
        lizard.classList.add('hidden');
        alien.classList.add('hidden');
    }else if ((human.selection === 'scissors-chal' && computer.selection === 'paper-chal') || (computer.selection === 'scissors-chal' && human.selection === 'paper-chal')){
        weapons.innerText = `Scissors beats Paper`;
        rockChallenge.classList.add('hidden');
        lizard.classList.add('hidden');
        alien.classList.add('hidden');
    }else if ((human.selection === 'rock-chal' && computer.selection === 'lizard') || (computer.selection === 'rock-chal' && human.selection === 'lizard')){
        weapons.innerText = `Rock beats Lizard`;
        paperChallenge.classList.add('hidden');
        scissorChallenge.classList.add('hidden');
        alien.classList.add('hidden');
    } else if ((human.selection === 'paper-chal' && computer.selection === 'alien') || (computer.selection === 'paper-chal' && human.selection === 'alien')){
        weapons.innerText = `Paper beats Alien`;
        rockChallenge.classList.add('hidden');
        scissorChallenge.classList.add('hidden');
        lizard.classList.add('hidden');
    } else if ((human.selection === 'scissors-chal' && computer.selection === 'lizard') || (computer.selection === 'scissors-chal' && human.selection === 'lizard')){
        weapons.innerText = `Scissor beats lizard`;
        rockChallenge.classList.add('hidden');
        paperChallenge.classList.add('hidden');
        alien.classList.add('hidden');
    } else if ((human.selection === 'lizard' && computer.selection === 'paper-chal')|| (computer.selection === 'lizard' && human.selection === 'paper-chal')){
        weapons.innerText = `Lizard beats Paper`;
        rockChallenge.classList.add('hidden');
        scissorChallenge.classList.add('hidden');
        alien.classList.add('hidden');
    }else if ((human.selection === 'lizard' && computer.selection === 'alien') || (computer.selection === 'lizard' && human.selection === 'alien')){
        weapons.innerText = `Lizard beats Alien`;
        rockChallenge.classList.add('hidden');
        paperChallenge.classList.add('hidden');
        scissorChallenge.classList.add('hidden');
    }else if ((human.selection === 'alien' && computer.selection === 'scissors-chal')|| (computer.selection === 'alien' && human.selection === 'scissors-chal')){
        weapons.innerText = `Alien beats Scissors`;
        rockChallenge.classList.add('hidden');
        paperChallenge.classList.add('hidden');
        lizard.classList.add('hidden');
    } else if ((human.selection === 'alien' && computer.selection === 'rock-chal') || (computer.selection === 'alien' && human.selection === 'rock-chal')){
        weapons.innerText -` Alien beats Rock`;
        paperChallenge.classList.add('hidden');
        scissorChallenge.classList.add('hidden');
        lizard.classList.add('hidden');
    } else{
        weapons.innerText = `The game is a Draw`;
        drawGameChallenge();
    }
    getWins();
    setTimeout(function(){
        challengeResetGame();
    }, 5000);
}
function getWinsClassic(){
    if ((human.selection === 'rock' && computer.selection === 'scissors')|| (human.selection === 'paper' && computer.selection === 'rock')|| (human.selection === 'scissors' && computer.selection === 'paper')){
        humanWins.innerText = human.wins += 1
    } else if ((computer.selection === 'rock' && human.selection === 'scissors')||(computer.selection === 'paper' && human.selection === 'rock')||(computer.selection === 'scissors' && human.selection === 'paper')){
        computerWins.innerText = computer.wins += 1
    } else{ 
        humanWins.innerText = human.wins += 0
        computerWins.innerText = computer.wins += 0
        return
    }
}
function getWins(){
      if ((human.selection === 'rock-chal' && computer.selection === 'scissors-chal')|| (human.selection === 'paper-chal' && computer.selection === 'rock-chal')|| (human.selection === 'scissors-chal' && computer.selection === 'paper-chal')|| (human.selection === 'rock-chal' && computer.selection === 'lizard')||(human.selection === 'paper-chal' && computer.selection === 'alien')||(human.selection === 'scissors-chal' && computer.selection === 'lizard')||(human.selection === 'lizard' && computer.selection === 'paper-chal')||(human.selection === 'lizard' && computer.selection === 'alien')||(human.selection === 'alien' && computer.selection === 'scissors-chal')||(human.selection === 'alien' && computer.selection === 'rock-chal')){
        humanWins.innerText = human.wins += 1;
    } else if((computer.selection === 'rock-chal' && human.selection === 'scissors-chal')||(computer.selection === 'paper-chal' && human.selection === 'rock-chal')||(computer.selection === 'scissors-chal' && human.selection === 'paper-chal')||(computer.selection === 'rock-chal' && human.selection === 'lizard')||(computer.selection === 'paper-chal' && human.selection === 'alien')||(computer.selection === 'scissors-chal' && human.selection === 'lizard')||(computer.selection === 'lizard' && human.selection === 'paper-chal')||(computer.selection === 'lizard' && human.selection === 'alien')||(computer.selection === 'alien' && human.selection === 'scissors-chal')||(computer.selection === 'alien' && human.selection === 'rock-chal')){
        computerWins.innerText = computer.wins += 1;
    } else{
        humanWins.innerText = human.wins += 0;
        computerWins.innerText = computer.wins += 0;
        return;
    }
}
function drawGameClassic() {
    var weaponToDuplicate;
    if (human.selection === 'rock') {
        weaponToDuplicate = rock;
    } else if (human.selection === 'paper') {
        weaponToDuplicate = paper;
    } else if (human.selection === 'scissors') {
        weaponToDuplicate = scissors;
    }
    var elementsToHide = [rock, paper, scissors];

    for (var i = 0; i < elementsToHide.length; i++) {
        if (elementsToHide[i] !== weaponToDuplicate) {
            elementsToHide[i].classList.add('hidden');
        }
    }
    if (weaponToDuplicate) {
        cloneWeapon = weaponToDuplicate.cloneNode(true);
        cloneWeapon.classList.add('cloned-element');
        gameWeapons.appendChild(cloneWeapon);
    }
}

function drawGameChallenge(){
    var weaponToDuplicate;
    if (human.selection === 'rock-chal') {
        weaponToDuplicate = rockChallenge;
    } else if (human.selection === 'paper-chal') {
        weaponToDuplicate = paperChallenge;
    } else if (human.selection === 'scissors-chal') {
        weaponToDuplicate = scissorChallenge;
    } else if (human.selection === 'lizard'){
        weaponToDuplicate = lizard;
    }else if (human.selection === 'alien'){
        weaponToDuplicate = alien;
    }
    var elementsToHide = [rockChallenge, paperChallenge, scissorChallenge, lizard, alien];
    for (var i = 0; i < elementsToHide.length; i++) {
        if (elementsToHide[i] !== weaponToDuplicate) {
            elementsToHide[i].classList.add('hidden');
        }
    }
    if (weaponToDuplicate) {
        cloneWeapon = weaponToDuplicate.cloneNode(true);
        cloneWeapon.classList.add('cloned-element');
        challengeGameSection.appendChild(cloneWeapon);
    }
}
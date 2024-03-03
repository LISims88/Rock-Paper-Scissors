//Data Model
var classic = ['rock', 'paper', 'scissors']
var challenge = ['rock', 'paper', 'scissors', 'lizard', 'alien']
var human = {
    wins: 0,
    selection: ''
}
var computer = {
    wins: 0,
    selection: ''
}
//DOM Variable
//classic
var gameWeapons = document.querySelector('.game-weapons')
var rock = document.querySelector('.rock')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')

var humanWins = document.querySelector('.human-wins')
var computerWins = document.querySelector('.computer-wins')
var weapons = document.querySelector('.weapons')
var gameChoice = document.querySelector('.game-choice')
var classicGame = document.querySelector('.classic')
var challengeGame = document.querySelector('.challenge')
var differentGameButton = document.querySelector('.button')

var classicBoard = document.querySelector('.classic-game-board')

//challenge
var lizard = document.querySelector('lizard')
var alien = document.querySelector('.alien')
var challengeBoardAdd = document.querySelector('.challenge-game-add')

//Eventlisteners
classicGame.addEventListener('click', showClassicGame)
challengeGame.addEventListener('click', showChallengeGame)
differentGameButton.addEventListener('click', function(){
    returnHome()
    challengeBoardAdd.classList.add('hidden')
} )
gameWeapons.addEventListener('click', function(event){
    if(event.target.className === 'rock') {
        human.selection = 'rock'
    } else if(event.target.className === 'paper'){
        human.selection = 'paper'
    } else if(event.target.className === 'scissors'){
        human.selection = 'scissors'
    }
    createComputer()
})
challengeBoardAdd.addEventListener('click', function(event){
    if (event.target.className === 'lizard'){
        human.selection = 'lizard'
    } else if (event.target.className === 'alien'){
        human.selection = 'alien'
    }
    computerChallenge()
    resetChallengeGame()
    
})
//Event Handlers
function showClassicGame(){
    classicGame.classList.toggle('hidden')
    challengeGame.classList.toggle('hidden')
    gameChoice.classList.toggle('hidden')
    classicBoard.classList.toggle('hidden')
    weapons.classList.toggle('hidden')
    differentGameButton.classList.toggle('hidden')
}
function showChallengeGame(){
    classicGame.classList.toggle('hidden')
    challengeGame.classList.toggle('hidden')
    gameChoice.classList.toggle('hidden')
    classicBoard.classList.toggle('hidden')
    challengeBoardAdd.classList.remove('hidden')
    weapons.classList.toggle('hidden')
    differentGameButton.classList.toggle('hidden')
}
function returnHome(){
     if (showClassicGame){
        !showClassicGame()
    } else if (showChallengeGame){
        !showChallengeGame()
    } 
}
function resetGameBoard(){
   if (rock){
       rock.classList.remove('hidden')
    }
    if (scissors){
        scissors.classList.remove('hidden')
    }
    if (paper){
        paper.classList.remove('hidden')
   }
   if (lizard){
       lizard.classList.remove('hidden')
    }
if (alien){
       alien.classList.remove('hidden')
   }
}
//Functions
function getRandomIndex(array){
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function createComputer(){
    computer.selection = getRandomIndex(classic)
    getResults()
}
function computerChallenge(){
    createComputer()
    computer.selection= getRandomIndex(challenge)
    getResults()
}

function getResults(){
    if((human.selection === 'rock' && computer.selection === 'scissors') || (computer.selection === 'rock' && human.selection === 'scissors')){
        weapons.innerText = `Rock beats Scissors`
        paper.classList.add('hidden');
        lizard.classList.add('hidden');
         alien.classList.add('hidden');
    } else if ((human.selection === 'paper' && computer.selection === 'rock') || (computer.selection === 'paper' && human.selection === 'rock')){
        weapons.innerText = `Paper beats Rock`
        scissors.classList.add('hidden');
        lizard.classList.add('hidden');
        alien.classList.add('hidden');
    }else if ((human.selection === 'scissors' && computer.selection === 'paper') || (computer.selection === 'scissors' && human.selection === 'paper')){
        weapons.innerText = `Scissors beats Paper`
        rock.classList.add('hidden');
        lizard.classList.add('hidden');
        alien.classList.add('hidden');
    }else if ((human.selection === 'rock' && computer.selection === 'lizard') || (computer.selection === 'rock' && human.selection === 'lizard')){
        weapons.innerText = `Rock beats Lizard`
        paper.classList.add('hidden');
        scissors.classList.add('hidden');
        alien.classList.add('hidden');
    } else if ((human.selection === 'paper' && computer.selection === 'alien') || (computer.selection === 'paper' && human.selection === 'alien')){
        weapons.innerText = `Paper beats Alien`
        rock.classList.add('hidden');
        scissors.classList.add('hidden');
        lizard.classList.add('hidden');
    } else if ((human.selection === 'scissors' && computer.selection === 'lizard') || (computer.selection === 'scissors' && human.selection === 'lizard')){
        weapons.innerText = `Scissor beats lizard`
        rock.classList.add('hidden');
        paper.classList.add('hidden');
        alien.classList.add('hidden');
    } else if ((human.selection === 'lizard' && computer.selection === 'paper')|| (computer.selection === 'lizard' && human.selection === 'paper')){
        weapons.innerText = `Lizard beats Paper`
        rock.classList.add('hidden');
        scissors.classList.add('hidden');
        alien.classList.add('hidden');
    }else if ((human.selection === 'lizard' && computer.selection === 'alien') || (computer.selection === 'lizard' && human.selection === 'alien')){
        weapons.innerText = `Lizard beats Alien`
        rock.classList.add('hidden');
        paper.classList.add('hidden');
        scissors.classList.add('hidden');
    }else if ((human.selection === 'alien' && computer.selection === 'scissors')|| (computer.selection === 'alien' && human.selection === 'scissors')){
        weapons.innerText = `Alien beats Scissors`
        rock.classList.add('hidden');
        paper.classList.add('hidden');
        lizard.classList.add('hidden');
    } else if ((human.selection === 'alien' && computer.selection === 'rock') || (computer.selection === 'alien' && human.selection === 'rock')){
        weapons.innerText -` Alien beats Rock`
        paper.classList.add('hidden');
         scissors.classList.add('hidden');
        lizard.classList.add('hidden');
    } else {
        weapons.innerText = `The game is a Draw`
    }
    getWins();
    setTimeout(function(){
        resetGameBoard()
    }, 5000)
    
}
function getWins(){
      if ((human.selection === 'rock' && computer.selection === 'scissors')|| (human.selection === 'paper' && computer.selection === 'rock')|| (human.selection === 'scissors' && computer.selection === 'paper')|| (human.selection === 'rock' && computer.selection === 'lizard')||(human.selection === 'paper' && computer.selection === 'alien')||(human.selection === 'scissors' && computer.selection === 'lizard')||(human.selection === 'lizard' && computer.selection === 'paper')||(human.selection === 'lizard' && computer.selection === 'alien')||(human.selection === 'alien' && computer.selection === 'scissors')||(human.selection === 'alien' && computer.selection === 'rock')){
        humanWins.innerText = human.wins += 1
    } else if((computer.selection === 'rock' && human.selection === 'scissors')||(computer.selection === 'paper' && human.selection === 'rock')||(computer.selection === 'scissors' && human.selection === 'paper')||(computer.selection === 'rock' && human.selection === 'lizard')||(computer.selection === 'paper' && human.selection === 'alien')||(computer.selection === 'scissors' && human.selection === 'lizard')||(computer.selection === 'lizard' && human.selection === 'paper')||(computer.selection === 'lizard' && human.selection === 'alien')||(computer.selection === 'alien' && human.selection === 'scissors')||(computer.selection === 'alien' && human.selection === 'rock')){
        computerWins.innerText = computer.wins += 1
    } else{
        return
    }
}
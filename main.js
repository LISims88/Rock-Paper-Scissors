//Data Model
var classic = ['rock', 'paper', 'scissors']
//DOM Variable
var rock = document.querySelector('.rock')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')
 var lizard = document.querySelector('lizard')
var alien = document.querySelector('.alien')
var differentGameButton = document.querySelector('.button')
var classicGame = document.querySelector('.classic')
var challengeGame = document.querySelector('.challenge')
var classicBoard = document.querySelector('.classic-game-board')
var challengeBoardAdd = document.querySelector('.challenge-game-add')
var weapons = document.querySelector('.weapons')
var gameChoice = document.querySelector('.game-choice')
//Eventlisteners
classicGame.addEventListener('click', showClassicGame)
challengeGame.addEventListener('click', showChallengeGame)
differentGameButton.addEventListener('click', function(){
    returnHome()
    challengeBoardAdd.classList.add('hidden')
} )
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


//Functions
function getRandomIndex(array){
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function humanPlay () {
    
}

function createComputer(){
    computerPlay = getRandomIndex(classic)
}
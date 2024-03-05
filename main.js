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

//Function
function getRandomIndex(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
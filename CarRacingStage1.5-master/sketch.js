var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var Img_1, Img_2, Img_3, Img_4, track_Img

function preload(){
  Img_1 = loadImage("images/car1.png");
  Img_2 = loadImage("images/car2.png");
  Img_3 = loadImage("images/car3.png");
  Img_4 = loadImage("images/car4.png");

  track_Img = loadImage("images/track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.End()
  }
}

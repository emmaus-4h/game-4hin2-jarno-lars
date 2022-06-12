/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.lllll
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
const GAMEWON = 4;
var spelStatus = UITLEG;
const LEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40
var x = 100
var move = 5;

var img1; 
var img2; 
var img3;
var img4;
var img5;
var img6;
  
var speler1X = 100; // x-positie van speler
var speler1Y = 100; // y-positie van speler

var speler2X = 1150;
var speler2Y = 620;

var plankX = [100, 600, 1100, 100, 600, 1100, 100, 600, 1100];
var plankY = [100, 100, 100, 300, 300, 300, 500, 500, 500];

var timer = 5; // 120 sec
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown(LEFT_ARROW)) {
speler1X = speler1X -1.8
  }
  if (keyIsDown(RIGHT_ARROW)) {
speler1X = speler1X +1.8
  }
  if (keyIsDown(DOWN_ARROW)) {
speler1Y = speler1Y +1.8
  }
  if (keyIsDown(UP_ARROW)) {
speler1Y = speler1Y -1.8
  }
  // vijand (speler2)
  if (keyIsDown(65)) {
speler2X = speler2X -2
  }
  if (keyIsDown(68)) {
speler2X = speler2X +2
  }
  if (keyIsDown(83)) {
speler2Y = speler2Y +2
  }
  if (keyIsDown(87)) {
speler2Y = speler2Y -2
  }
  // timer
  timer = timer - 0.03;
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
*/
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (speler1X - speler2X <50 &&
 speler1X - speler2X > -50 &&
 speler1Y - speler2Y <50 &&
 speler1Y - speler2Y > -50) {
 console.log ("botsing");
 spelstatus = GAMEOVER;
}
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  
  // achtergrond
createCanvas(1280, 720);
background(img3);

  
  // vijand

  
  // speelveld
  if(speler1X < 0) {
    speler1X = speler1X + move;
  }
  if(speler1X > width) {
    speler1X = speler1X - move;
  }
  if(speler1Y < 0) {
    speler1Y = speler1Y + move;
  }
  if(speler1Y > height) {
    speler1Y = speler1Y - move;
  }
  if(speler2X < 0) {
    speler2X = speler2X + move;
  }
  if(speler2X > width) {
    speler2X = speler2X - move;
  }
  if(speler2Y < 0) {
    speler2Y = speler2Y + move;
  }
  if(speler2Y > height) {
    speler2Y = speler2Y - move;
  }
  
  // blok vovenin border
  fill("pink");
  rect(0,0,1400,20);
  // blok onder border
  fill("pink");
  rect(0,700,1400, 20);
  // blok links border
  fill("pink");
  rect(0,0,20,1000);
  // blok rechts border
  fill("pink");
  rect(1260,0,20,1000);
  // binnenin speelveld
  
  var i =0;
  while(i <plankX.length){
  rect(plankX[i],plankY[i] ,20,100);
  i=i+1;
 }
  
    var i =0;
  while(i <plankY.length){
  rect(plankY[i],plankX[i] ,100,20);
  i=i+1;
 }
  
// speler 2
 image(img2, speler2X-25, speler2Y-25, 80, 80);
    fill ('gray')
  ellipse (400,100,100,100)
// speler 1
image(img1, speler1X-25, speler1Y-25, 60,60);

};
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (speler1X - speler2X <50 &&
  speler1X - speler2X > -50 &&
  speler1Y - speler2Y <50 &&
  speler1Y - speler2Y > -50) {
    
    return true;
  }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
/**
 * proload
 * deze functie wordt 1x uitgevoerd voor setup.
 * we laden hier de plaatjes
 */
function preload() {
 img1 = loadImage('plaatjes/image2.png');
 img2 = loadImage('plaatjes/enemy.png');
 img3 = loadImage('plaatjes/grass.png');
 img4 = loadImage('plaatjes/controls.png')
 img5 = loadImage('plaatjes/controls3.png')
 img6 = loadImage('plaatjes/startgame.jpeg')
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
 background("green");
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
  beweegAlles();
  verwerkBotsing();
  tekenAlles();
  if (checkGameOver()) {
  spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
console.log("game over");
  textFont('Georgia');
  textSize(70);
  fill("white");
  text("game over", 470, 300)
  textSize(50)
  text("Too bad :]", 520, 350)
  textSize(25)
  text("press space to restart game", 480, 380)
  if ( keyIsDown(32)) { // spatie
  spelStatus = UITLEG;
  }
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
console.log("uitleg");
  textSize(80);
  fill("gray");
  rect(0,0,1280,720);
  fill("white");
  image(img6, 0, 0,1280, 720);
  textFont('Georgia');
  text("Start game", 430, 200);
  textSize(30)
  text("Press enter to start :]", 495 , 245)
  image(img4, 200, 400, 275, 180);
  image(img5, 800, 360, 275, 270);
  textSize(40)
  fill('black');
  text('player 1', 865, 360)
  text('player 2', 260, 360)
  if (keyIsDown(13)) { // enter
  speler1X = 100; // x-positie van speler
  speler1Y = 50; // y-positie van speler
  speler2X = 1150;// x-positie van vijand
  speler2Y = 620; // y-positie van vijand
  spelStatus = SPELEN;
    }
  }
}

let startButton = document.getElementById('startbutton');
let pauseButton = document.getElementById('stopbutton');
let timer = document.getElementById('timer');
let moves = document.getElementById('moves');


let memoryCardImages = [<img src="assets/images/toad.png"></img>, <img src="assets/images/toad.png"></img>, <img src="assets/images/super-mario.png"></img>, <img src="assets/images/super-mario.png"></img>, <img src="assets/images/super-mario.png"></img>,
<img src="assets/images/scared-boo.png">, <img src="assets/images/scared-boo.png"></img>, <img src="assets/images/princess-peach.png"></img>, <img src="assets/images/princess-peach.png"></img>
    <img src="assets/images/bowser.png"></img>, <img src="assets/images/bowser.png"></img>, <img src="assets/images/goomba.png"></img>, <img src="assets/images/goomba.png"></img></img>];


/* starting the timer when user press "play game" button */
start.addEventListener('click', function startGame() {
    timer = setInterval(function () {
        console.log('!');
    }, 1000);
});
/* makes the timer stop when the user press the "pause game" button */
stop.addEventListener('click', function pauseGame() {
    clearInterval(timer);
});

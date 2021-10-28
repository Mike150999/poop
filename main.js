const dino = document.getElementById("dino");
const cactus = document.querySelector(".cactus");
const restart = document.querySelector('.restart');
const countNum = document.getElementById('score');


window.addEventListener('keydown', function (event) {
	jump();
	cactus.style.animation = "cactusMov 1.3s infinite linear";

});
window.addEventListener('click', function (event) {
	jump();
	cactus.style.animation = "cactusMov 1.3s infinite linear";
});

function jump() {
	if (dino.classList != "jump") {
		dino.classList.add('jump');
	}
	setTimeout(function () {
		dino.classList.remove('jump');
	}, 300);
}

let isAlive = setInterval(move, 1);
let i = 0;
let score = setInterval(count, 1300);

function move() {
	let cactus = document.querySelector('.cactus');
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
		i = 0;
		clearInterval(score);
		cactus.style.left = '50px';
		cactus.style.animation = "none";
		restart.classList.add('restart__active');
		let audio = new Audio('audio/audio.mp3');
		audio.play();
	}
}

function count() {
	i++;
	countNum.innerHTML = i;
}
restart.addEventListener('click', () => {
	restart.classList.remove('restart__active');
	score = setInterval(count, 1300);
	countNum.innerHTML = 0;
});
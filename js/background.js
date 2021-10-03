const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

console.log(chosenImage);
const src = `../img/${chosenImage}`;

const backGround = document.querySelector("body");
backGround.style.backgroundImage = "url("+src+")";


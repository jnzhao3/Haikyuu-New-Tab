const baseDir = "img/";

window.onload = function start() {
    var hex = chooseRandom(hexes);
    document.getElementById('index').style.background = hex.background;
    var image = chooseRandom(images);
    document.getElementById("img").src = baseDir + image.src;
    document.getElementById("image").style.left = 10 + Math.random()*80 + "%";
}

var hexes = [{background: "#BED7D1"}, {background: "#F7EBC3"}, 
            {background: "#FBD6C6"}, {background: "#F8E1E7"}, {background: "#F8D1E0"}];

var images = [{src: "bokuaka.png"}, {src: "hinata.png"}, 
{src: "kage.png"}, {src: "ken.png"}, {src: "kh.png"}, {src: "kuroo.png"}, 
{src: "lev.png"}, {src: "oik.png"}, {src: "tsukki.png"},{src: "ushi.png"},
{src: "bokuto.png"}, {src: "akashi.png"}, {src: "kuroo2.png"},{src: "firstyears.png"},
{src: "tend.png"},{src: "ken2.png"}];

function chooseRandom(array) {
    var index = Math.floor((Math.random() * array.length))
    return array[index];
}

function displayCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let amOrPm = hours < 12 ? "AM" : "PM";
  
    hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    hours = addZero(hours);
    minutes = addZero(minutes);
  
    let timeString = `${hours} : ${minutes} ${amOrPm}`;
  
    document.getElementById("clock").innerText = timeString;
    let timer = setTimeout(displayCurrentTime, 1000);
  }
  
  function addZero(component) {
    return component < 10 ? "0" + component : component;
  }
  
displayCurrentTime();

document.getElementById("image").addEventListener("click", animate);

function animate() {
    document.getElementById("image").style.left = 10 + Math.random()*80 + "%";
    var image = chooseRandom(images);
    document.getElementById("img").src = baseDir + image.src;
}
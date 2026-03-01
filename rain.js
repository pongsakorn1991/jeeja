const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

for(let i=0;i<100;i++){
drops.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
length:Math.random()*20,
speed:2+Math.random()*3
});
}

function drawRain(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle="rgba(255,255,255,0.3)";
ctx.lineWidth=1;
ctx.beginPath();
for(let d of drops){
ctx.moveTo(d.x,d.y);
ctx.lineTo(d.x,d.y+d.length);
}
ctx.stroke();

for(let d of drops){
d.y+=d.speed;
if(d.y>canvas.height) d.y=0;
}

requestAnimationFrame(drawRain);
}

drawRain();
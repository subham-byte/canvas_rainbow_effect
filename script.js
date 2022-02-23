const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
let hue = 0;

// drawing of rectangle
/*
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(10, 10, 50, 50);
})
ctx.fillStyle = "white";
ctx.fillRect(10, 10, 50, 50);
*/

// drawing of circle and Making it interactive
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCircle();
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
//   drawCircle();
for(let i=0;i<10;i++){
    particleArray.push(new particle());
    }
});

canvas.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i=0;i<10;i++){
        particleArray.push(new particle());
        }
    // drawCircle();
});

// function drawCircle() {
//   ctx.fillStyle = "red";
//   // ctx.strokeStyle = "blue";
//   // ctx.lineWidth = 5;
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//   ctx.fill();
//   // ctx.stroke();
// }
//to animate we use

class particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random()*15 + 1;
        this.speedX = Math.random()*3 -1.5;
        this.speedY = Math.random()*3 -1.5;
        this.color = "hsl("+ hue + ", 100%, 50%)";
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size>0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        // ctx.strokeStyle = "#FF6363";
        // ctx.shadowBlur = 200;
        // ctx.shadowColor = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        // ctx.stroke();
    }
}

// function init(){
//     for(let i=0;i<100;i++){
//         particleArray.push(new particle());
//     }
// }
// init();

function handleParticle(){
    for(let i = 0; i<particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        if(particleArray[i].size <= 0.3){
            particleArray.splice(i,1);
        }
    }
}

function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawCircle();
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    handleParticle();
    hue++;
    requestAnimationFrame(animate);
}
animate();
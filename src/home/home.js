/* processing -> p5 */ 


var radius = 250;
var particles = [];
var noiseOffset1, noiseOffset2;
var noiseScale = 0.01;
var maxVel = Math.PI / 32;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    
    // 2020/12 更新 去掉点击重画
    // document.querySelector('.p5Canvas').addEventListener("click", init_config)
    // document.querySelector('.p5Canvas').addEventListener("touchstart", init_config)
    ifRadius();
    init_config();
    stroke(56, 100);
    noFill();
}


// 2020/12 更新 去掉点击重画
function init_config() {
    particles = [];
    noiseOffset1 = new p5.Vector(Math.random() * 1000000, Math.random() * 1000000, Math.random() * 1000000);
    noiseOffset2 = new p5.Vector(Math.random() * 1000000, Math.random() * 1000000, Math.random() * 1000000);
}


function draw() {
    background(255);


    translate(0, 0);
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.002);
    rotateZ(frameCount * 0.003);

    particles.forEach(v => {
        v.update();
        v.draw();
    })

    if(particles.length < 666){
        particles.push(new Particle());
        // console.log(particles.length);
    }

    if(state.size){
        init_config();
        resizeCanvas(window.innerWidth, window.innerHeight, WEBGL);
        ifRadius();
        state.size = false;
    }
}

function ifRadius(){
    if(window.innerWidth < 400){
        radius = 150;
    } else if(window.innerWidth < 700){
        radius = 200;
    } else {
        radius = 250;
    }
}

class Particle {

    constructor() {
        this.r1 = Math.random() * Math.PI * 2;
        this.r2 = Math.random() * Math.PI * 2;
        this.trajectory = [];
        this.trajectory.push(this.getRectangularCoordinate());
    }

    update() {
        if (this.trajectory.length < 100) {
            var p = this.trajectory[this.trajectory.length - 1];
            this.r1 += map(noise(noiseOffset1.x + p.x * noiseScale, noiseOffset1.y + p.y * noiseScale, noiseOffset1.z + p.z * noiseScale), 0, 1, -maxVel, maxVel);
            this.r2 += map(noise(noiseOffset2.x + p.x * noiseScale, noiseOffset2.y + p.y * noiseScale, noiseOffset2.z + p.z * noiseScale), 0, 1, -maxVel, maxVel);
            if (this.r1 < 0) { this.r1 += TWO_PI; }
            if (this.r1 >= TWO_PI) { this.r1 -= TWO_PI; }
            if (this.r2 < 0) { this.r2 += TWO_PI; }
            if (this.r2 >= TWO_PI) { this.r2 -= TWO_PI; }
            this.trajectory.push(this.getRectangularCoordinate());
        }
    }

    draw() {
        beginShape();
        this.trajectory.forEach(p => {
            vertex(p.x, p.y, p.z);
        })
        endShape();
    }

    getRectangularCoordinate() {
        var x = radius * sin(this.r1) * cos(this.r2);
        var y = radius * sin(this.r1) * sin(this.r2);
        var z = radius * cos(this.r1);
        return new p5.Vector(x, y, z);
    }

}

// var radius = 250;

// class Particle {
//     constructor(){
//         this.r1 = this.r1;
//         this.r2 = this.r2;
//     }
// }

// function setup(){
//     createCanvas(window.innerWidth, window.innerHeight);
//     smooth();
// }

// function draw(){
//     background(127);
// }

// import p5 from "p5"
// var s = new p5( function( _ ){

//     _.setup = function(){
//         s.createCanvas(window.innerWidth - 10, window.innerHeight - 10);
//         s.smooth();
//         document.body.appendChild(s.canvas);
//     }
//     _.draw = () => { 
//         s.background(255);
//     };

// });



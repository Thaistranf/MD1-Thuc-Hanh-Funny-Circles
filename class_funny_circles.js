class Circles {
    x;
    y;
    radius;
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getRadius () {
        return Math.floor(Math.random()*80);
    }
    getRandomHex() {
        return Math.floor(Math.random()*255);
    }
    getRandomColor(){
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return `rgb(${red},${green},${blue})`;
    }
    createCircles () {
        let ctx = document.getElementById("myCanvas").getContext("2d");

        let radius = this.getRadius();
        let color = this.getRandomColor();

        let x = Math.random()*window.innerWidth;
        let y = Math.random()*window.innerHeight;

        ctx.beginPath();

        ctx.arc(x, y, radius, 0, 2*Math.PI);

        ctx.strokeStyle = "blue"
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.fill();

        ctx.closePath();
    }
    createMultipleCircle() {
        for (let i = 0; i < 30; i++) {
            this.createCircles();
        }
    }
}

let funnyCircles = new Circles(500, 300, 200);

funnyCircles.createCircles();
funnyCircles.createCircles();

funnyCircles.createMultipleCircle();


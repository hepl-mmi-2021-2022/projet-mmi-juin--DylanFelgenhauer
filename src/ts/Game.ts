import {settings} from "./settings";

export class Game {
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    height : number;
    width : number;
    radius : number;
    startAngle : number;
    endAngle : number;
    midLaneWidth : number;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.height = settings.player.height;
        this.width = settings.player.width;
        this.radius = settings.ball.radius;
        this.startAngle = settings.ball.startAngle;
        this.endAngle = settings.ball.endAngle;
        this.midLaneWidth = settings.midLane.width;
        this.drawPlayerOne();
        this.drawPlayerTwo();
        this.drawBall();
        this.drawMidLane();
    }

    drawPlayerOne(){
        this.ctx.fillStyle='white';
        this.ctx.fillRect((this.canvas.width-this.width)-this.width,this.canvas.height/2-this.height*0.5, this.width,this.height);
    }

    drawPlayerTwo(){
        this.ctx.fillStyle='white';
        this.ctx.beginPath();
        this.ctx.fillRect(this.width,(this.canvas.height/2)-this.height*0.5, this.width,this.height);
        this.ctx.closePath();
    }

    drawMidLane(){
        this.ctx.fillStyle='white';
        this.ctx.fillRect(this.canvas.width/2,0,this.midLaneWidth,this.canvas.height)
    }

    drawBall(){
        this.ctx.fillStyle = 'white';
        this.ctx.arc(0,0,50,0,Math.PI*2);
    }

}
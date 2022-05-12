import {settings} from "./settings";
import {PlayerOne} from "./PlayerOne";
import {PlayerTwo} from "./PlayerTwo";
import {Ball} from "./Ball";
import {Score} from "./Score";

export class Canvas{
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    playerOne : PlayerOne;
    playerTwo : PlayerTwo;
    ball : Ball;
    score : Score;
    midLaneWidth : number;


    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.playerOne = new PlayerOne();
        this.playerTwo = new PlayerTwo();
        this.ball = new Ball();
        this.score = new Score();
        this.midLaneWidth = settings.midLane.width;
        this.resizeCanvas();
        this.addEventListener();
        this.draw();

    }
    resizeCanvas(){
        this.canvas.width=settings.canvas.width;
        this.canvas.height=settings.canvas.height;
    }
    addEventListener(){
        window.addEventListener('resize',()=>{
            this.resizeCanvas();
            this.draw()
        });
    }
    drawMidLane(){
        this.ctx.fillStyle='white';
        this.ctx.fillRect(this.canvas.width/2-this.midLaneWidth*0.5,0,this.midLaneWidth,this.canvas.height);
    }
    draw(){
        this.playerOne.drawPlayerOne();
        this.playerTwo.drawPlayerTwo();
        this.ball.drawBall();
        this.score.displayScoreOne();
        this.score.displayScoreTwo();
        this.drawMidLane();
    }
     animate(){
        this.clear();
        this.ball.animate();
     }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}

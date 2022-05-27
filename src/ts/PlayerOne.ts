import {settings} from "./settings";

export class PlayerOne {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;

    x:number;
    y:number;
    radius: number;
    startAngle:number;
    endAngle:number;

    midlaneWidth:number;

    scoreOne:any;
    scoreTwo:any;

    constructor(){
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.width = settings.player.width;
        this.height = settings.player.height;
        this.x= this.canvas.width/2;
        this.y= this.canvas.height/2;
        this.radius = settings.ball.radius;
        this.startAngle = settings.ball.startAngle;
        this.endAngle = settings.ball.endAngle;
        this.midlaneWidth = settings.midLane.width;
        this.scoreOne = 0;
        this.scoreTwo = 0;
        this.drawElements();
    }
    //Player One
    drawPlayerOne(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.width, this.canvas.height/2-(this.height*0.5), this.width, this.height)
        this.ctx.closePath();
    }
    //Player Two
    drawPlayerTwo(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.canvas.width-(this.width*2), this.canvas.height/2-(this.height*0.5), this.width, this.height)
        this.ctx.closePath();
    }
    //Ball
    drawBall(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle);
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawMidlane(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.x-(this.midlaneWidth*0.5),0,this.midlaneWidth,this.canvas.height);
        this.ctx.closePath();
    }

    //Score
    displayScoreOne(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle ="white";
        this.ctx.fillText(this.scoreOne,this.canvas.width/2 -60,30);
    }
    displayScoreTwo(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle ="white";
        this.ctx.fillText(this.scoreTwo,this.canvas.width/2 +50,30);
    }

    drawElements(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.drawPlayerOne();
        this.drawPlayerTwo();
        this.drawBall();
        this.drawMidlane();
        this.displayScoreOne();
        this.displayScoreTwo();
    }
}
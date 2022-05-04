import {settings} from "./settings";
export class Ball{
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    radius : number;
    startAngle : number;
    endAngle : number;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.radius = settings.ball.radius;
        this.startAngle = settings.ball.startAngle;
        this.endAngle = settings.ball.endAngle;
        this.drawBall();
    }
    drawBall(){
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.canvas.width/2,this.canvas.height/2,this.radius,this.startAngle,this.endAngle);
        this.ctx.fill();
    }
}
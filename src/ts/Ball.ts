import {settings} from "./settings";
export class Ball{
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    ballX : number;
    ballY : number;
    radius : number;
    startAngle : number;
    endAngle : number;
    speedY : number;
    speedX : number;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.radius = settings.ball.radius;
        this.ballX = this.canvas.width/2;
        this.ballY = this.canvas.height/2;
        this.startAngle = settings.ball.startAngle;
        this.endAngle = settings.ball.endAngle;
        this.speedY= settings.ball.speedY;
        this.speedX=settings.ball.speedX;
        this.drawBall();
        this.animate();

/*
        this.ballBounce();
*/
    }
    drawBall(){
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.ballX,this.ballY,this.radius,this.startAngle,this.endAngle);
        this.ctx.fill();
    }
/*    ballBounce(){
        if (this.ballY+this.speedY <= 0 || this.ballY + this.speedY >= this.canvas.height){
            this.speedY = -this.speedY;
            this.ballY = this.speedY;
            this.ballX =this.speedX;
        }else{
            this.ballY +=this.speedY;
            this.ballX += this.speedX;
        }
        this.ballCollision();
    }

    ballCollision(){
        if (this.ballX+this.speedX <=0 || this.ballX+this.speedX >= this.canvas.width){
            this.ballY+= this.speedY;
            this.speedX = -this.speedX;
            this.ballX += this.speedX;
        }
    }*/

    animate(){
        this.ballX+=this.speedX;
        window.requestAnimationFrame(()=>{
            this.animate();
        })
        this.drawBall();
    }
}
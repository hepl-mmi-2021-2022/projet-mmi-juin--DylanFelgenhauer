import {settings} from "./settings";

export class PlayerOne {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;

    ballX:number;
    ballY:number;
    ballSpeedX:number;
    ballspeedY:number;
    radius: number;
    startAngle:number;
    endAngle:number;

    midlaneWidth:number;
    midLaneX:number;
    midlaneY:number;

    scoreOne:any;
    scoreTwo:any;
    maxScore:number;

    posXPlayerOne:number;
    posYPlayerOne:number;
    posXPlayerTwo:number;
    posYPlayerTwo:number;
    gravity:number;

    gameIsStarted:boolean;



    constructor(){
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.width = settings.player.width;
        this.height = settings.player.height;
        this.gravity = settings.player.gravity;

        this.ballX= this.canvas.width/2;
        this.ballY= this.canvas.height/2;
        this.ballSpeedX=settings.ball.ballSpeedX;
        this.ballspeedY=settings.ball.ballSpeedY;
        this.radius = settings.ball.radius;
        this.startAngle = settings.ball.startAngle;
        this.endAngle = settings.ball.endAngle;


        this.midlaneWidth = settings.midLane.width;
        this.midLaneX = this.canvas.width/2;

        this.scoreOne = 0;
        this.scoreTwo = 0;
        this.maxScore =10;

        this.posXPlayerOne = this.width;
        this.posYPlayerOne = this.canvas.height/2-(this.height*0.5);
        this.posXPlayerTwo = this.canvas.width-(this.width*2);
        this.posYPlayerTwo = this.canvas.height/2-(this.height*0.5);

        this.gameIsStarted = true;
        this.drawElements();
        this.animation();
    }
    //Player One
    drawPlayerOne(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(settings.playerOne.positions.x, settings.playerOne.positions.y, this.width, this.height)
        this.ctx.closePath();


    }
    //Player Two
    drawPlayerTwo(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(settings.playerTwo.positions.x, settings.playerTwo.positions.y, this.width, this.height)
        this.ctx.closePath();


    }

    //Mouvements player
    mouvementsPlayer(){
        window.addEventListener("keydown", (e)=>{
            if (e.key === "z" && settings.playerOne.positions.y >=0 ){
                settings.playerOne.positions.y -= this.gravity;
            }

            if (e.key === "s" && settings.playerOne.positions.y + settings.playerOne.height <= this.canvas.height ){
                settings.playerOne.positions.y += this.gravity;
            }
        })

        window.addEventListener("keydown", (e)=>{
            if (e.key === "ArrowUp" && settings.playerTwo.positions.y >=0 ){
                settings.playerTwo.positions.y -= this.gravity;
                console.log(this.gravity)
            }

            if (e.key === "ArrowDown" && settings.playerTwo.positions.y + settings.playerTwo.height <= this.canvas.height){
                settings.playerTwo.positions.y += this.gravity;
            }
        })

    }

    //Ball
    drawBall(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.arc(this.ballX,this.ballY,this.radius,this.startAngle,this.endAngle);
        this.ctx.fill();
        this.ctx.closePath();
    }
    //BallBounce
    ballCollision(){
        //Collision Y
        if (this.ballY + this.ballspeedY <=0 || this.ballY + this.ballspeedY >= this.canvas.height){
            this.ballspeedY = -this.ballspeedY;
            this.ballY += this.ballspeedY;
            this.ballX += this.ballSpeedX;
        }else{
            this.ballY += this.ballspeedY;
            this.ballX += this.ballSpeedX;
        }
        //Collision X
        if (this.ballX + this.ballSpeedX <=0 || this.ballX + this.ballSpeedX >= this.canvas.width){
            this.ballSpeedX = -this.ballSpeedX;
            this.ballY += this.ballspeedY;
            this.ballX += this.ballSpeedX;
        }else {
            this.ballY += this.ballspeedY;
            this.ballX += this.ballSpeedX;
        }

    }

    //Midlane
    drawMidlane(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.midLaneX-(this.midlaneWidth*0.5),0,this.midlaneWidth,this.canvas.height);
        this.ctx.closePath();
    }

    //Score
    displayScoreOne(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle ="white";
        this.ctx.fillText( "Joueur 1: "+ this.scoreOne,this.canvas.width/5,30);
    }
    displayScoreTwo(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle ="white";
        this.ctx.fillText("Joueur 2: "+ this.scoreTwo,this.canvas.width/2*1.5-50,30);
    }

    //Add Score
    addScore(){
        if ((this.ballY + this.ballspeedY <= settings.playerTwo.positions.y + settings.playerTwo.height &&
        this.ballX + this.ballSpeedX >= settings.playerTwo.positions.x &&
        this.ballY + this.ballspeedY > settings.playerTwo.positions.y)
        ||
            (this.ballY + this.ballspeedY > settings.playerOne.positions.y &&
        this.ballX + this.ballSpeedX <= settings.playerOne.positions.x + settings.playerOne.width))
        {
            this.ballSpeedX = this.ballSpeedX * -1;
        }else if (this.ballX + this.ballSpeedX < settings.playerOne.positions.x){
            this.scoreTwo += 1;
            this.ballSpeedX = this.ballSpeedX * -1;
            this.ballX = this.canvas.width/2;
            this.ballY += this.ballspeedY;
        }else if ( this.ballX + this.ballSpeedX > settings.playerTwo.positions.x + settings.playerTwo.width){
            this.scoreOne += 1;
            this.ballSpeedX = this.ballSpeedX * -1;
            this.ballX = this.canvas.width/2 + this.ballSpeedX;
            this.ballY += this.ballspeedY;
        }

    }

    victory(){
        if(this.scoreOne === this.maxScore){
            alert("Victoire du joueur 1 !");
            this.scoreOne = 0;
            this.scoreTwo = 0;

        }else if(this.scoreTwo === this.maxScore){
            alert("Victoire du joueur 2 !")
            this.scoreOne = 0;
            this.scoreTwo = 0;
        }
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

    animation(){
        this.drawElements();
        if (this.gameIsStarted === true){
            this.ballCollision();
            this.mouvementsPlayer();
            this.addScore();
            this.victory();
            window.requestAnimationFrame(()=>{
                this.animation();
            })
        }
    }
}
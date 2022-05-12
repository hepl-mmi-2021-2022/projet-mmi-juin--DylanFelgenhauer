export class Score{
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    scoreOne : any;
    scoreTwo : any;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.scoreOne = 0;
        this.scoreTwo = 0;
        this.displayScoreOne();
        this.displayScoreTwo();
    }

    displayScoreOne(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle ="white";
        this.ctx.fillText(this.scoreOne,this.canvas.width/2 -60,30);
    }
    displayScoreTwo(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle ="white";
        this.ctx.fillText(this.scoreTwo,this.canvas.width/2 +60,30);
    }
}
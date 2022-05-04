import {settings} from "./settings";

export class Canvas{
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    midLaneWidth : number;


    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.midLaneWidth = settings.midLane.width;
        this.resizeCanvas();
        this.drawMidLane();
    }
    resizeCanvas(){
        this.canvas.width=settings.canvas.width;
        this.canvas.height=settings.canvas.height;
        this.addEventListener();
    }
    addEventListener(){
        window.addEventListener('resize',()=>{
            this.resizeCanvas()
        });
    }
    drawMidLane(){
        this.ctx.fillStyle='white';
        this.ctx.fillRect(this.canvas.width/2-this.midLaneWidth*0.5,0,this.midLaneWidth,this.canvas.height)
    }
}
import {settings} from "./settings";

export class Canvas{
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
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
}
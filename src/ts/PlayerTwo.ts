import {settings} from "./settings";

export class PlayerTwo {
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    height : number;
    width : number;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.height = settings.player.height;
        this.width = settings.player.width;
        this.drawPlayerTwo();
    }
    drawPlayerTwo(){
        this.ctx.fillStyle='white';
        this.ctx.beginPath();
        this.ctx.fillRect(this.width,(this.canvas.height/2)-this.height*0.5, this.width,this.height);
        this.ctx.closePath();
    }
}
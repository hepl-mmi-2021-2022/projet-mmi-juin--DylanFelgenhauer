import {settings} from "./settings";

export class PlayerOne {
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    height : number;
    width : number;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.height = settings.player.height;
        this.width = settings.player.width;
        this.drawPlayerOne();
    }
    drawPlayerOne(){
        this.ctx.fillStyle='white';
        this.ctx.fillRect((this.canvas.width-this.width)-this.width,this.canvas.height/2-this.height*0.5, this.width,this.height);
    }
}
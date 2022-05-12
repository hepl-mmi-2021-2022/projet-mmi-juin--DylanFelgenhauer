import {PlayerOne} from "./PlayerOne";
import {PlayerTwo} from "./PlayerTwo";
import {Ball} from "./Ball";

export class Animate{
    canvas:HTMLCanvasElement;
    ctx :CanvasRenderingContext2D;
    playerOne : PlayerOne;
    playerTwo : PlayerTwo;
    ball : Ball;
    playerTwoY: number;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.playerOne = new PlayerOne();
        this.playerTwo = new PlayerTwo();
        this.ball = new Ball();
        this.playerTwoY = (this.canvas.height/2)-this.playerTwo.height*0.5;
    }
}
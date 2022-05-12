import {PlayerOne} from "./PlayerOne";
import {PlayerTwo} from "./PlayerTwo";
import {Ball} from "./Ball";
import {Canvas} from "./Canvas";

export class Animate{
    canvas:Canvas;
    ctx :CanvasRenderingContext2D;
    playerOne : PlayerOne;
    playerTwo : PlayerTwo;
    ball : Ball;
    playerTwoY: number;

    constructor(canvas:Canvas) {
        this.canvas = canvas;
    }
}
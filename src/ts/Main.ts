import {Canvas} from "./Canvas";
import {PlayerTwo} from "./PlayerTwo";
import {PlayerOne} from "./PlayerOne";
import {Ball} from "./Ball";


class Main{
    canvas:Canvas;
    playerTwo : PlayerTwo;
    playerOne : PlayerOne;
    ball: Ball;

    constructor() {
        this.canvas = new Canvas();
        this.playerTwo = new PlayerTwo();
        this.playerOne = new PlayerOne();
        this.ball = new Ball();
    }
}
new Main();
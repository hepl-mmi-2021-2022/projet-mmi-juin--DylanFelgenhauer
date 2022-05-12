import {Canvas} from "./Canvas";
import {PlayerTwo} from "./PlayerTwo";
import {PlayerOne} from "./PlayerOne";
import {Ball} from "./Ball";
import {Animate} from "./Animate";
import {Score} from "./Score";


class Main{
    canvas:Canvas;
    animate : Animate;
    ball: Ball;
    score : Score;

    constructor() {
        this.canvas = new Canvas();
        this.ball = new Ball();
        this.animate = new Animate();
        this.score = new Score();
    }
}
new Main();
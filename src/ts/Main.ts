import {Canvas} from "./Canvas";
import {Game} from "./Game";


class Main{
    canvas:Canvas;
    game : Game;

    constructor() {
        this.canvas = new Canvas();
        this.game = new Game();
    }
}
new Main();
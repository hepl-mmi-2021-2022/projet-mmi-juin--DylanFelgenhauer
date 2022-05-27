import { Canvas } from "./Canvas";
import {PlayerOne} from "./PlayerOne";



class Main{
    canvas:Canvas;
    player:PlayerOne;


    constructor() {
        this.canvas = new Canvas();
        this.player = new PlayerOne();

    }
}
new Main();
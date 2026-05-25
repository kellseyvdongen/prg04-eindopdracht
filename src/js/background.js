import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            pos: new Vector(640, 360)
         })
        this.graphics.use(Resources.Background.toSprite())
        this.scale = new Vector(1.4, 1.4)
    }

}
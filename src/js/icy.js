import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Icy extends Actor { 
    constructor() {
        super({ 
            width: 80,
            height: 129,
            pos: new Vector(1280, randomInRange(40, 670))
         })
        this.graphics.use(Resources.Icy.toSprite())
    }
    onPreUpdate(engine) {
        this.vel = new Vector(-200, 0)
        if (this.pos.x < -100) {
            this.pos = new Vector(1280, randomInRange(40, 670))
        }
    }
}
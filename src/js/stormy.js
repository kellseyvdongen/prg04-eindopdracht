import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from './Enemy.js'

export class Stormy extends Enemy {
    constructor() {
        super({ 
            width: Resources.Stormy.width,
            height: Resources.Stormy.height,
            pos: new Vector(1280, randomInRange(40, 670))
         })
        this.graphics.use(Resources.Stormy.toSprite())
    }
}
import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from './Enemy.js'

export class Darcy extends Enemy {
    constructor() {
        super({ 
            width: Resources.Darcy.width,
            height: Resources.Darcy.height,
            pos: new Vector(1280, randomInRange(40, 670))
         })
        this.graphics.use(Resources.Darcy.toSprite())
    }
}
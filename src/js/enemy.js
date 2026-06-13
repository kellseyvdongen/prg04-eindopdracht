import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Enemy extends Actor { 
    onPreUpdate(engine) {
        this.vel = new Vector(randomInRange(-400, -10), 0)
        if (this.pos.x < -100) {
            this.pos = new Vector(1280, randomInRange(40, 670))
            this.vel = new Vector(randomInRange(-400, -10), 0)
        }
    }
}
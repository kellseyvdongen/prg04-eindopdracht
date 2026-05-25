import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, CollisionType, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Icy } from './icy.js'

export class Stella extends Actor {
    constructor() {
        super({ 
            width: 80,
            height: 114,
            pos: new Vector(200, 300)
         })
        this.graphics.use(Resources.Stella.toSprite())
    }
    onInitialize(engine) {
        this.body.collisionType = CollisionType.Passive
        this.events.on('collisionstart', (event) => {
            console.log(event.other.owner)
            if (event.other.owner instanceof Icy) {
                console.log('Collided with', event.other)
                event.other.owner.pos = new Vector(1280, randomInRange(40, 670))
            }
        })
    }
    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0

        if (engine.input.keyboard.isHeld('ArrowLeft') && this.pos.x > 30) {
            xspeed = -200
        }   
        if (engine.input.keyboard.isHeld('ArrowRight') && this.pos.x < 1000) {
            xspeed = 200
        }
        if (engine.input.keyboard.isHeld('ArrowUp') && this.pos.y > 40) {
            yspeed = -200
        }
        if (engine.input.keyboard.isHeld('ArrowDown') && this.pos.y < 670) {
            yspeed = 200
        }
        this.vel = new Vector(xspeed, yspeed)

        if (engine.input.keyboard.wasPressed('Space')) {
            console.log('Shoot')
        }
    }

}

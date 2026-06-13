import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {
    #bg2
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            pos: new Vector(640, 360),
            z: -1
         })
        this.graphics.use(Resources.Background.toSprite())
    }

    onInitialize(engine) {
        this.#bg2 = new Actor({
            width: 1280,
            height: 720,
            pos: new Vector(1920, 360),
            z: -1
        })
        this.#bg2.graphics.use(Resources.Background.toSprite())
        engine.currentScene.add(this.#bg2)
    }

    onPreUpdate(engine) {
        this.pos.x -= 2
        this.#bg2.pos.x -= 2

        if (this.pos.x <= -640) {
            this.pos.x = 1920
        }
        if (this.#bg2.pos.x <= -640) {
            this.#bg2.pos.x = 1920
        }
    }

}
import '../css/style.css'
import { Actor, Vector, CollisionType, randomInRange } from "excalibur"
import { Resources } from './resources.js'
import { Stella } from './stella.js'

export class HealthPack extends Actor {
    constructor() {
        super({ 
            width: Resources.HealthPack.width,
            height: Resources.HealthPack.height,
            pos: new Vector(randomInRange(100, 1000), randomInRange(40, 670))
         })
        this.graphics.use(Resources.HealthPack.toSprite())
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Passive
        this.on('exitviewport', (event) => this.exitScreen(event))

        this.events.on('collisionstart', (event) => {
            if (event.other.owner instanceof Stella) {
                this.kill()
                event.other.owner.health++
                this.scene.engine.updateHealth(event.other.owner.health)

                setTimeout(() => {
                    const newPack = new HealthPack()
                    engine.currentScene.add(newPack)
                }, randomInRange(5000, 15000))
            }
        })

    }

    onPreUpdate(engine) {
        this.vel = new Vector(-200, 0)
    }

    exitScreen(event) {
            const scene = this.scene
            this.kill()

            setTimeout(() => {
                if (scene) {
                    const newPack = new HealthPack()
                    scene.add(newPack)
                }
            }, randomInRange(5000, 15000))
    }
}

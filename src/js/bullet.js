import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, CollisionType, randomInRange} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Bullet extends Actor {
    constructor(x, y) {
        super({ 
            width: Resources.Bullet.width,
            height: Resources.Bullet.height,
            pos: new Vector(x, y)
         })
        this.graphics.use(Resources.Bullet.toSprite())
    }
    onInitialize(engine) {
        this.body.collisionType = CollisionType.Passive
        this.on('exitviewport', () => {
            this.kill()
        })
    }
    
}
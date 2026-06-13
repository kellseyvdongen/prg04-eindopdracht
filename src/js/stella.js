import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, CollisionType, randomInRange, SpriteSheet, Animation} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Icy } from './icy.js'
import { Bullet } from './bullet.js'
import { Darcy } from './darcy.js'
import { Stormy } from './stormy.js'
import { Giant } from './giant.js'
import { HealthPack } from './healthpack.js'

export class Stella extends Actor {
    constructor() {
        super({ 
            width: Resources.Stella.width,
            height: Resources.Stella.height,
            pos: new Vector(200, 300)
         })
    }
    onInitialize(engine) {
        // Loop Animatie instellen
        const sheet = SpriteSheet.fromImageSource({
            image: Resources.StellaWalking,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: Resources.StellaWalking.width / 4,
                spriteHeight: Resources.StellaWalking.height
            }
        })
        this.walkAnimation = Animation.fromSpriteSheet(sheet, [0, 1, 2, 3], 100)
        this.graphics.use(this.walkAnimation)

        // Toevoegen van health en score
        this.health = 3
        this.score = 0

        // Botsingen detecteren
        this.body.collisionType = CollisionType.Passive
        this.events.on('collisionstart', (event) => this.onCollision(event))
    }
    onPreUpdate(engine) {
        // Beweging
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

        // Schieten
        if (engine.input.keyboard.wasPressed('Space')) {
            this.shoot()
        }
    }

    onCollision(event) {
        // Botsing met vijand
        if (event.other.owner instanceof Icy || event.other.owner instanceof Darcy || event.other.owner instanceof Stormy || event.other.owner instanceof Giant) {
            console.log('Collided with', event.other)
            event.other.owner.pos = new Vector(1280, randomInRange(40, 670))

            this.graphics.use(Resources.StellaHurt.toSprite())
            setTimeout(() => {
                this.graphics.use(this.walkAnimation)
                setTimeout(() => {
                    this.graphics.use(Resources.StellaHurt.toSprite())  
                    setTimeout(() => {
                        this.graphics.use(this.walkAnimation)
                    }, 100)
                }, 100)
            }, 100)

            // Health verminderen
            this.health--
            this.scene.engine.updateHealth(this.health)
            // Game over als health 0 is
            if (this.health <= 0) {
                const engine = this.scene.engine
                engine.currentScene.clear()
                engine.goToScene('gameover')
            }
        }
    }

    shoot() {
        // Schieten
        this.graphics.use(Resources.StellaShoot.toSprite())
        setTimeout(() => {
            this.graphics.use(this.walkAnimation)
        }, 200)

        // Bullet toevoegen aan de scene
        const bullet = new Bullet(this.pos.x + 30, this.pos.y - 20)
        this.scene.add(bullet)
        bullet.vel = new Vector(300, 0)

        if (bullet.body.collisionType === CollisionType.Passive) {
            bullet.events.on('collisionstart', (event) => {
                if (event.other.owner instanceof Icy || event.other.owner instanceof Darcy || event.other.owner instanceof Stormy) {
                    event.other.owner.pos = new Vector(1280, randomInRange(40, 670))
                    event.other.owner.vel = new Vector(randomInRange(-500, -10), 0)

                    bullet.kill()
                    this.score++
                    this.scene.engine.updateScore(this.score)
                } 
                if (event.other.owner instanceof Giant) {
                    bullet.kill()
                }
            })
        }
        
    }

}

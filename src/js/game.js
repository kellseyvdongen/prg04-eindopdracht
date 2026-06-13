import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Stella } from './stella.js'
import { Icy } from './icy.js'
import { Darcy } from './darcy.js'
import { Stormy } from './stormy.js'
import { Giant } from './giant.js'
import { HealthPack } from './healthpack.js'
import { GameOver } from './gameover.js'

export class Game extends Engine {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.addScene('gameover', new GameOver())
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        // Toevoegen van achtergrond, health en score labels, vijanden en de speler
        const background = new Background()
        this.add(background)

        this.health = new Label({
            text: 'Health: 3',
            pos: new Vector(10, 10),
            scale: new Vector(1.5, 1.5),
            color: Color.White,
        })
        this.add(this.health)

        this.score = new Label({
            text: 'Score: 0',
            pos: new Vector(10, 40),
            scale: new Vector(1.5, 1.5),
            color: Color.White,
        })
        this.add(this.score)

        const healthpack = new HealthPack()
        this.add(healthpack)

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
             const giant = new Giant()
             this.add(giant)
            }, 2000 * i)
        }

        const darcy = new Darcy()
        this.add(darcy)

        const stormy = new Stormy()
        this.add(stormy)

        const icy = new Icy()
        this.add(icy)

        const stella = new Stella()
        this.add(stella)

    }

    updateHealth(health) {
        // Bijwerken van de health label
        this.health.text = `Health: ${health}`
    }
    updateScore(score) {
        // Bijwerken van de score label
        this.score.text = `Score: ${score}`
    }
    
}

new Game()

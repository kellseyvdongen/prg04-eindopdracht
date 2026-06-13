import '../css/style.css'
import { Vector, Label, Color, Scene, Font} from "excalibur"

export class GameOver extends Scene {
    constructor() {
        super({
            name: 'gameover'
        })
        this.backgroundColor = Color.Black
    }

    onInitialize(engine) {
        const gameOverLabel = new Label({
            text: 'Game Over',
            pos: new Vector(500, 300),
            font: new Font({
                family: 'Arial',
                size: 48,
                color: Color.White
            })
        })
        this.add(gameOverLabel)
        const restartLabel = new Label({
            text: 'Press Enter to Restart',
            pos: new Vector(500, 400),
            font: new Font({
                family: 'Arial',
                size: 24,
                color: Color.White
            })
        })
        this.add(restartLabel)
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld('Enter')) {
            // Remove all actors from the current scene
            engine.currentScene.actors.forEach(actor => {
                engine.remove(actor)
            })
            // Restart the game
            engine.startGame()
        }
    }
}
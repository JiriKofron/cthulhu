import 'phaser'
import {MainScene} from "./scenes/mainScene.js";

export function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: containerId,
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        render: {
            pixelArt: true
        },
        scene: [MainScene]
    });
}

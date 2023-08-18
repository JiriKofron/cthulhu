export class MainScene extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('background', 'src/assets/game/ocean.png')
        this.load.spritesheet('boat', 'src/assets/game/basicboat.png', {frameWidth: 64, frameHeight: 64})
    }

    create() {
        const background = this.add.image(0, 300, 'background')
        background.setScale(2.5)
        const ship = this.add.sprite(300, 330, 'boat' )
    }

    update() {}
}

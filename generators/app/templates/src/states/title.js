export default class Title {
    create() {
        this.add.sprite(
            this.game.width / 2,
            this.game.height / 2,
            'example'
        ).anchor.setTo(0.5, 0.5);
    }
}

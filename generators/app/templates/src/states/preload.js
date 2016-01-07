const
    IMAGES_DIR = 'assets/images/';

export default class Preload {
    preload() {
        this.preloadSprite = this.add.sprite(
            this.game.width / 2,
            this.game.height / 2,
            'preloadSprite'
        );
        this.preloadSprite.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadSprite);

        this.load.onLoadComplete.addOnce(
            () => this.game.state.start('title')
        );

        this.load.image('example', `${IMAGES_DIR}example.png`);
    }

    create() {
        this.preloadSprite.cropEnabled = false;
    }
}

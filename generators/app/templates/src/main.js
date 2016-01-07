'use strict';

import Boot    from './states/boot';
import Preload from './states/preload';
import Title   from './states/title';

const
    WIDTH       = 1200,
    HEIGHT      = 800,
    RENDER_MODE = Phaser.AUTO,
    CONTAINER   = '',
    GAME        = new Phaser.Game(WIDTH, HEIGHT, RENDER_MODE, CONTAINER);

GAME.state.add('boot', Boot);
GAME.state.add('preload', Preload);
GAME.state.add('title', Title);

GAME.state.start('boot');

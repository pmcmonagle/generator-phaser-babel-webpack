'use strict';

const
    generator  = require('yeoman-generator'),
    _          = require('underscore.string'),
    util       = require('util'),
    path       = require('path'),
    chalk      = require('chalk'),
    mkdirp     = require('mkdirp'),
    files      = require('./files'),
    foldername = path.basename(process.cwd());

module.exports = class Generator extends generator.Base {
    /**
     * Each object method is run in order from top-to-bottom,
     * starting with init.
     */
    constructor() {
        super(...arguments);
        this.__ = _;
    }

    init() {
        this.on('end', () => {
            if (!this.options['skip-install']) this.installDependencies();
        });
    }

    info() {
        this.log(this.yeoman);
        this.log(chalk.magenta('Phaser + Babel + Webpack for Yeoman; let\'s get started!'));
    }

    runPrompt() {
        const
            done = this.async(),
            prompts = [
                {
                    type:    'input',
                    name:    'projectName',
                    message: 'What is the title of your project?',
                    default: foldername
                },
                {
                    type:    'input',
                    name:    'targetVersion',
                    message: 'Which version of Phaser would you like to use?',
                    default: 'latest'
                },
            ];

        this.prompt(prompts, (properties) => {
            Object.assign(this, properties);
            done();
        });
    }

    generate() {
        files.directories.forEach(  (d) => mkdirp(d) );
        files.staticAssets.forEach( (s) => this.copy(s.source, s.target) );
        files.templates.forEach(    (t) => this.template(t.source, t.target) );
    }
};

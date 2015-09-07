var glob = require('glob')
var path = require('path')
var util = require('util')
var version = require('koa-version')

module.exports = (app, dir) => {
    glob(util.format('%s/*.js', dir), {realpath: true}, (err, files)  => {
        if (err) {
            throw err
        }
        app.use(version('>=1.0.0', app => {
            files.map(file => {
                app.use(require(file).routes());
            })
        }, app));
    });

    glob(util.format('%s/*/*.js', dir), {realpath: true}, (err, files) => {
        if (err) {
            throw err
        }
        files.map(file => {
            var version = path.basename(path.dirname(file));
            app.use(version(util.format('>=%s', version), app => {
                app.use(require(file).routes());
            }, app));
        });
    });
};

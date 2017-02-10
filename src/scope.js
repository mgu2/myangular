'use strict';

var _ = require('lodash');
Scope.prototype.$watch = function (watchFn, listenerFn) {
    var watcher = {
        watchFn: watchFn
        , listenerFn: listenerFn
    };
    this.$$watchers.push(watcher);
};
Scope.prototype.$digest = function () {
    _.forEach(this.$$watchers, function (watcher) {
        watcher.listenerFn();
    });
};


function Scope() {
    this.$$watchers = [];
}

module.exports = Scope;
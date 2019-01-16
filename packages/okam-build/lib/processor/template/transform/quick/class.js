/**
 * @file Transform quick app class attribute
 * @author sparklewhy@gmail.com
 */

'use strict';

const transformClass = require('../base/class');

module.exports = function (attrs, name, tplOpts, opts) {
    transformClass(attrs, name, tplOpts, Object.assign({
        arrToStr: true
    }, opts));
};

/**
 * @file build script
 * @author xxx
 */

'use strict';

const build = require('../../../../');
build.run('ant', require('./ant.config'));

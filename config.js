/**
 * Created by ryan on 9/28/14.
 */
var env = require('./env.json');

var configload = function() {
    var node_env = process.env.NODE_ENV || 'development';
    console.log(node_env);
    return env[node_env];
};

var config = configload();

module.exports = config;
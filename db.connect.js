var chalk = require('chalk');
var mongoose = require( 'mongoose' );
var config = require('./db.config.js');

//You can either pass the DB URI as String or set it as an environment variable

//var dbURI = 'mongodb://localhost/test';

var dbURI = process.env.DB_URI_LLLLL || config.local.url;

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log(chalk.yellow('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

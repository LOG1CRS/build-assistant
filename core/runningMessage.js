'use strict';

/**
 * Module dependencies.
 */

const figlet = require('figlet');
const chalk = require('chalk');

/**
 * Prints the run message when build starts.
 */
const runningMessage = () => {
  console.clear();

  console.log(figlet.textSync('Builder Running!', { font: 'Speed' }));
  console.log(chalk.blue('By PSC LOG1C'));
  console.log('');
};

module.exports = runningMessage;

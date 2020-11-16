'use strict';

const clear = require('console-clear');
const figlet = require('figlet');
const chalk = require('chalk');

const runningMessage = async () => {
  clear();

  console.log(figlet.textSync('Builder Running!', { font: 'Speed' }));
  console.log(chalk.blue('By PSC LOG1C'));
  console.log('');
};

module.exports = runningMessage;

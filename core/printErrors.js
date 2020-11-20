'use strict';

/**
 * Module dependencies.
 */

const chalk = require('chalk');

/**
 * Prints an error message according to the type.
 * @param {number} type - the number of the message to be printed
 */
const printErrors = (type) => {
  console.log(' ');
  switch (type) {
    case 1:
      console.error(
        chalk.red(
          '--> builder.json file not found, please create the file with the steps to follow to build your project'
        )
      );
      break;
    case 2:
      console.error(
        chalk.red(
          '--> There was an error running your build command, add the correct build command and try again.'
        )
      );
      break;
    default:
      console.error(chalk.red('--> An error has occurred, try again later.'));
      break;
  }
  console.log(' ');
};

module.exports = printErrors;

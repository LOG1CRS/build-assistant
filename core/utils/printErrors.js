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
          '--> builder.json file not found, please create the file with the steps to follow in the root of the project.'
        )
      );
      break;
    case 2:
      console.error(
        chalk.red(
          '--> There was an error running your build command, please add the correct build command.'
        )
      );
      break;
    default:
      console.error(
        chalk.red(
          '--> Build-assistant execution terminated unexpectedly, please try to fix the errors and try again.'
        )
      );
      break;
  }
};

module.exports = printErrors;

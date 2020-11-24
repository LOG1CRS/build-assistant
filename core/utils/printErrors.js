'use strict';

/**
 * Module dependencies.
 */

const chalk = require('chalk');

/**
 * Prints an error message according to the type.
 * @param {number} type - the number of the message to be printed
 */
const printErrors = (type, reference) => {
  console.log(' ');
  switch (type) {
    case 1:
      console.error(
        chalk.red(
          '--> Error: builder.json file not found, please create the file with the steps to follow in the root of the project.'
        )
      );
      break;
    case 2:
      console.error(
        chalk.red(
          '--> Error: Steps not found, please add steps to your builder.json file.'
        )
      );
      break;
    case 3:
      console.error(
        chalk.red(
          '--> Error: Insufficient steps, you need to have a minimum of two steps in your builder.json, run_build and another one.'
        )
      );
      break;
    case 4:
      console.error(
        chalk.red(
          `--> Error: ${reference} is not a valid tool, please type a valid tool.`
        )
      );
      break;
    case 5:
      console.error(
        chalk.red(
          '--> Error: run_build tool not found in any step, please add a step with run_build tool to make your build.'
        )
      );
      break;
    case 6:
      console.error(
        chalk.red(
          '--> Error: Build command failed, there was an error running your build command, please add the correct build command.'
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

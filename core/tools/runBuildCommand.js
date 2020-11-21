'use strict';

/**
 * Module dependencies.
 */

const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * Manages the execution of the build command.
 * @param {string} buildCommand - The command to run the build.
 * @returns {boolean} True if the command ran correctly or false if not.
 */
const runBuildCommand = async (buildCommand) => {
  try {
    var { stdout } = await exec(buildCommand);
    console.log(stdout);
    return true;
  } catch (err) {
    console.log(err.stderr);
    return false;
  }
};

module.exports = runBuildCommand;

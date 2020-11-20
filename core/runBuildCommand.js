'use strict';

/**
 * Module dependencies.
 */

const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * Extracts the build command, and return it with the npm prefix to run the build.
 * @param {*|Array} userConfig - Config array according to the user params.
 * @returns {string} The command to run the build with npm.
 */
const getNpmBuildCommand = (userConfig) => {
  for (let i = 0; i < userConfig.length; i++) {
    if (userConfig[i].startsWith('build:')) {
      //return `${userConfig[i].slice(6).trim()}`;
      return `npm run ${userConfig[i].slice(6).trim()}`;
    }
  }
};

/**
 * Manages the execution of the build command.
 * @param {*|Array} userConfig - Config array according to the user params.
 * @returns {boolean} True if the command ran correctly or false if not.
 */
const runBuildCommand = async (userConfig) => {
  const buildCommand = getNpmBuildCommand(userConfig);

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

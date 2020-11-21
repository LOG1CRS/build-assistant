'use strict';

/**
 * Module dependencies.
 */

const runBuildCommand = require('./tools/runBuildCommand');
const printError = require('./utils/printErrors');

/**
 * Manages the entire flow of the code.
 */
const buildAssistant = async (file, userConfig) => {
  const runSuccessfully = await runBuildCommand(file.build_command);

  if (!runSuccessfully) {
    printError(2);
    return false;
  }

  return true;
};

module.exports = buildAssistant;

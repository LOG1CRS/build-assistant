'use strict';

/**
 * Module dependencies.
 */

const runningMessage = require('./runningMessage');
const getBuilderFile = require('./getBuilderFile');
const printErrors = require('./printErrors');
const useParams = require('../cli/useParams');
const runBuildCommand = require('./runBuildCommand');

/**
 * Manages the entire flow of the code.
 */
const buildAssistant = async () => {
  runningMessage();

  const file = getBuilderFile();

  if (!file) {
    printErrors(1);
    return;
  }

  const userConfig = useParams();
  const runSuccessfully = await runBuildCommand(userConfig);

  if (!runSuccessfully) {
    printErrors(2);
    return;
  }
};

module.exports = buildAssistant;

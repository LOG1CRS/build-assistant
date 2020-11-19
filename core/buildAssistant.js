'use strict';

/**
 * Module dependencies.
 */

const runningMessage = require('./runningMessage');
const getBuilderFile = require('./getBuilderFile');
const useParams = require('../cli/useParams');
const runBuildCommand = require('./runBuildCommand');

/**
 * Manages the entire flow of the code.
 */
const buildAssistant = () => {
  runningMessage();

  const file = getBuilderFile();

  if (!file) {
    return;
  }
  const userConfig = useParams();

  runBuildCommand(userConfig);
};

module.exports = buildAssistant;

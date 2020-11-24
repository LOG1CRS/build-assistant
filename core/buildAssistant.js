'use strict';

/**
 * Module dependencies.
 */

const runBuildCommand = require('./tools/runBuildCommand');
const printError = require('./utils/printErrors');

/**
 * Validates the steps.
 * @param {object|Array} steps - Each steps to make build.
 * @returns {boolean} True if the steps are valid or false if not.
 */
const stepsValidator = (steps) => {
  // build_assistant needs two or more steps to work correctly
  if (steps.length <= 1) {
    printError(3);
    return false;
  }

  // checks if there is a invalid tool
  for (let i = 0; i < steps.length; i++) {
    if (
      steps[i].tool !== 'move' &&
      steps[i].tool !== 'delete' &&
      steps[i].tool !== 'copy' &&
      steps[i].tool !== 'create' &&
      steps[i].tool !== 'run_build'
    ) {
      printError(4, steps[i].tool);
      return false;
    }
  }

  // build_assistant needs just a one step with run_build tool to work correctly
  const buildStepFound = steps.find((item) => item.tool === 'run_build');

  if (!buildStepFound) {
    printError(5);
    return false;
  }

  return true;
};

/**
 * Gets all steps from builder.json file.
 * @param {Object} file - The Document with steps to manage the project build.
 * @returns {object|Array} Steps
 */
const getBuildSteps = (file) => {
  var steps = [];

  if (!file.steps) {
    printError(2);
    return false;
  }

  file.steps.map((item) => {
    steps.push(item);
  });

  return steps;
};

/**
 * Manages the flow of the steps according to the builder.json file.
 * @param {Object} file - The Document with steps to manage the project build.
 * @param {(string|Array)} userConfig - Array with configs.
 * @returns {boolean} True if build assistant ran correctly or false if not.
 */
const buildAssistant = async (file, userConfig) => {
  const steps = getBuildSteps(file);

  if (!steps) {
    return false;
  }

  const stepsValidation = stepsValidator(steps);

  if (!stepsValidation) {
    return false;
  }

  console.log(steps);

  return true;

  // const runSuccessfully = await runBuildCommand(file.build_command);

  // if (!runSuccessfully) {
  //   printError(5);
  //   return false;
  // }
};

module.exports = buildAssistant;

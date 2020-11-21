#!/usr/bin/env node
'use strict';

/**
 * Code starts.
 */

const runningMessage = require('./core/utils/runningMessage');
const getBuilderFile = require('./core/utils/getBuilderFile');
const printErrors = require('./core/utils/printErrors');
const useParams = require('./cli/useParams');
const buildAssistant = require('./core/buildAssistant');

/**
 * Manages the entire flow of the code.
 */
const index = async () => {
  runningMessage();

  const file = getBuilderFile();

  if (!file) {
    printErrors(1);
    printErrors(null);
    return;
  }

  const userConfig = useParams();
  console.log(userConfig);

  const runAssistantCorrectly = await buildAssistant(file, userConfig);

  if (!runAssistantCorrectly) {
    printErrors(null);
    console.log(' ');
    return;
  }
};

index();

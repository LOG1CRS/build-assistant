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
 * The Build starts here with a message, then gets the builder.json file
 * and gets the cli params to be able to call the assistant function.
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

  const runAssistantCorrectly = await buildAssistant(file, userConfig);

  if (!runAssistantCorrectly) {
    printErrors(null);
    console.log(' ');
    return;
  }
};

index();

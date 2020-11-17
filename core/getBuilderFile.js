'use strict';

/**
 * Module dependencies.
 */

const fs = require('fs');
const chalk = require('chalk');

/**
 * Gets the builder.json file at the root of the project.
 */
const getBuilderFile = () => {
  try {
    const file = fs.readFileSync('builder.json', 'utf-8');
    const builderSettings = JSON.parse(file);
    return builderSettings;
  } catch (err) {
    console.error(
      chalk.red(
        'builder.json file not found, please create the file with the steps to follow to build your project'
      )
    );
    console.error(err);
    return false;
  }
};

module.exports = getBuilderFile;

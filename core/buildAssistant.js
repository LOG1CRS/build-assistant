'use strict';

const fs = require('fs');
const chalk = require('chalk');

const buildAssistant = () => {
  try {
    const file = fs.readFileSync('builder.json', 'utf-8');
    const builderSettings = JSON.parse(file);
    console.log(builderSettings);
  } catch (err) {
    console.error(
      chalk.red(
        'builder.json file not found, please create the file with the steps to follow to build your project'
      )
    );
    console.error(err);
  }
};

module.exports = buildAssistant;

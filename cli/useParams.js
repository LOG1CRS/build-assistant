'use strict';

/**
 * Gets an array of all params that the user added to cli.
 * @returns {(string|Array)} cli params
 */
const getParams = () => {
  const cliArgs = process.argv.slice(2);
  return cliArgs;
};

/**
 * Validates if the parameter is valid to add it to the configurations
 * @param {string} config - Config key
 * @param {(*|Array)} userConfig - Array with configs
 * @returns {boolean} true if the param is valid and false if is not valid.
 */
const configVerification = (config, userConfig) => {
  var verification = true;
  for (let i = 0; i < userConfig.length; i++) {
    if (userConfig[i].startsWith(config)) {
      verification = false;
      return verification;
    }
  }
  return verification;
};

/**
 * Adds the param to config array with a unique key config.
 * @param {string} param - Cli param
 * @param {(*|Array)} userConfig - Array with configs
 */
const getConfig = (param, userConfig) => {
  if (!param.startsWith('--') && configVerification('command: ', userConfig)) {
    userConfig.push(`command: ${param}`);
  }

  if (param === '--no-delete' && configVerification('noDelete: ', userConfig)) {
    userConfig.push(`noDelete: ${true} `);
  }
};

/**
 * Manages user params and returns and array of all configs.
 * @returns {(*|Array)} Config array according to the user params.
 */
const useParams = () => {
  const cliArgs = getParams();
  var userConfig = [];

  for (let i = 0; i < cliArgs.length; i++) {
    getConfig(cliArgs[i], userConfig);
  }

  return userConfig;
};

module.exports = useParams;

/**
 * params:
 * builder script
 * --no-delete -> Don't delete the build existing folder
 */

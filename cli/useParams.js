/**
 * params:
 * builder script
 * --no-delete -> Don't delete the build existing folder
 */

'use strict';

const getParams = () => {
  const cliArgs = process.argv.slice(2);
  return cliArgs;
};

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

const getConfig = (param, userConfig) => {
  if (!param.startsWith('--') && configVerification('command: ', userConfig)) {
    userConfig.push(`command: ${param}`);
  }

  if (param === '--no-delete' && configVerification('noDelete: ', userConfig)) {
    userConfig.push(`noDelete: ${true} `);
  }
};

const useParams = () => {
  const cliArgs = getParams();
  var userConfig = [];

  for (let i = 0; i < cliArgs.length; i++) {
    getConfig(cliArgs[i], userConfig);
  }

  return userConfig;
};

module.exports = useParams;

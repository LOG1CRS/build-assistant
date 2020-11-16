'use strict';

const getParams = () => {
  const cliArgs = process.argv.slice(2);
  return cliArgs;
};

const checkParams = (param) => {
  console.log(param);
};

const useParams = () => {
  const cliArgs = getParams();

  for (let i = 0; i < cliArgs.length; i++) {
    checkParams(cliArgs[i]);
  }
};

module.exports = useParams;

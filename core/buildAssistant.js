'use strict';

const getBuilderFile = require('./getBuilderFile');
const useParams = require('../cli/useParams');

const buildAssistant = () => {
  const file = getBuilderFile();

  if (!file) {
    return;
  }

  const config = useParams();
};

module.exports = buildAssistant;

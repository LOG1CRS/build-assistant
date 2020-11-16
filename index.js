#!/usr/bin/env node

'use strict';

const runningMessage = require('./core/runningMessage');
const buildAssistant = require('./core/buildAssistant');

runningMessage();
buildAssistant();

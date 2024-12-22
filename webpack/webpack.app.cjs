const path = require('path');

const { getFallbackConfig } = require('../scripts/index.cjs');

const nodeModules = {
  assert: false,
  buffer: false,
  console: false,
  constants: false,
  crypto: false,
  domain: false,
  events: false,
  fs: false,
  http: false,
  https: false,
  net: false,
  os: false,
  path: false,
  punycode: false,
  process: false,
  querystring: false,
  stream: false,
  string_decoder: false,
  timers: false,
  tty: false,
  url: false,
  util: false,
  vm: false,
  zlib: false,
};

module.exports = {
  plugins: [],
  resolve: {
    fallback: {
      // core node modules
      ...getFallbackConfig(nodeModules),
    },
  },
};

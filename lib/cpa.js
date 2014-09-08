var cpa = require('cpa.js'),
    config;

try {
  config = require('../config.json').cpa;
} catch (e) {
  config = {};
}

var serverName = process.env['SERVER'],
    server = config[serverName];

if (!server) {
  console.error('No server', serverName, 'found in config.json');
  process.exit();
}

var authProvider = server.authProvider,
    clientName   = server.clientName,
    clientId     = server.clientId,
    clientSecret = server.clientSecret,
    domain       = server.domain,
    deviceCode   = server.deviceCode,
    softwareId   = "cpa-radiotag-node-test",
    softwareVersion = require('../package.json').version;

console.log('authProvider', authProvider);
console.log('clientName', clientName);
console.log('clientId', clientId);
console.log('clientSecret', clientSecret);
console.log('domain', domain);
console.log('softwareId', softwareId);
console.log('softwareVersion', softwareVersion);

module.exports = {
  register: function () {
    cpa.device.registerClient(
      authProvider, clientName, softwareId, softwareVersion, registerDone
    );
  },
  associateUser: function () {
    cpa.device.requestUserCode(
      authProvider, clientId, clientSecret, domain, associateDone
    );
  },
  associateClient: function () {
    cpa.device.requestClientAccessToken(
      authProvider, clientId, clientSecret, domain, associateDone
    );
  },
  token: function () {
    cpa.device.requestUserAccessToken(
      authProvider, clientId, clientSecret, deviceCode, domain, tokenDone
    );
  }
}

function registerDone(error, clientId, clientSecret) {
  if (error) {
    console.error('Register error: ', error);
  } else {
    console.log('Register success: client_id: %s   client_secret: %s',clientId, clientSecret);
  }
}

function associateDone(error, data) {
  if (error) {
    console.error('Associate error: ', error);
  } else {
    console.log('Associate success: data: ', data);
  }
}

function tokenDone(error, data) {
  if (error) {
    console.error('Token error: ', error);
  } else if (data) {
    console.log('Token success: data: ', data);
  } else {
    console.log('Token pending');
  }
}

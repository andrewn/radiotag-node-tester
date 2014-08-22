var radiotag = require('radiotag.js'),
    config;

try {
  config = require('./config.json');
} catch (e) {
  config = {};
}

var serverName = process.env['SERVER'],
    server = config[serverName];

if (!server) {
  console.error('No server', serverName, 'found in config.json');
  process.exit();
}

var stationId   = server.stationId,
    accessToken = server.accessToken,
    uri         = server.uri;

console.log('stationId', stationId);
console.log('accessToken', accessToken);
console.log('uri', uri);

module.exports = {
  tag: function () {
    radiotag.tag(stationId, uri, accessToken, tagDone);
  },
  list: function () {
    radiotag.listTags(uri, accessToken, listDone);
  },
  auth: function () {
    radiotag.getAuthProvider(uri, authDone);
  }
}

function listDone(error, tags) {
  console.log('List', error, tags);
}

function tagDone(error, tag) {
  if (error) {
    console.error('Tag error', error);
  } else {
    console.log('Tag', tag);
  }
}

function authDone(err, authProviderBaseUrl, modes) {
   console.log(err, authProviderBaseUrl, modes);
 }
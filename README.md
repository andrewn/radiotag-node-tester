A small utility for testing radiotag.js in node.js

Install
--

    npm install

To use local radiotag.js:

    npm link radiotag.js

Configure
--

    cp config.json.example config.json

Add valid access token, server URI and station ID.

Use
--

    SERVER=BBC bin/radiotag auth

    stationId 0.c222.ce15.ce1.dab
    accessToken ...
    uri ...
    null 'https://radiotag.api.bbci.co.uk/ap/' { client: false, user: true, anonymous: false }

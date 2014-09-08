A small utility for testing cpa.js and radiotag.js in node.js

Install
--

    npm install

To use local radiotag.js:

    npm link radiotag.js

To use local cpa.js:

    npm link cpa.js

Configure
--

    cp config.json.example config.json

Add valid server URI and station ID.

If testing just radiotag.js, add valid access token.

Use
--

CPA:

    SERVER=BBC bin/cpa register

    authProvider https://auth-cpa.ebu.io/
    clientName My CPA device
    clientId 100054
    clientSecret f8960c7c324588145e5ba627d3abd1ed
    domain bbc1-cpa.ebu.io
    softwareId cpa-radiotag-node-test
    softwareVersion 0.0.0
    Register success: client_id: 1039455   client_secret: d6560b27efe15df67af0a14c2a90b9cc

Radiotag:

    SERVER=BBC bin/radiotag auth

    stationId 0.c222.ce15.ce1.dab
    accessToken ...
    uri ...
    null 'https://radiotag.api.bbci.co.uk/ap/' { client: false, user: true, anonymous: false }

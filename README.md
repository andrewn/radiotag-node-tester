A small utility for testing cpa.js and radiotag.js in node.js

Install
--

    npm install

To use local radiotag.js:

    npm link radiotag.js

To use local cpa.js:

    npm link cpa.js

Configure and use
--

    cp config.json.example config.json

### Entire flow:

To test the entire CPA -> radiotag flow then the minimum config you'll need is:

    {
      "radiotag" : {
        "EBU": {
          "stationId": "0.c222.ce15.ce1.dab",
          "uri": "http://bbc1-cpa.ebu.io/"
        }
      }
    }

Then run:

    SERVER=EBU bin/flow

The entire CPA flow will run, prompting you with a URL and user code on the command line when necessary. When an access code is acuired then a tag will be made.

### Radiotag only

You can test any part of the radiotag.js API by adding a valid server URI, station ID and access token in the `radiotag` section of the config.

Then run:

    SERVER=<name> bin/radiotag <action>

e.g.

    SERVER=BBC bin/radiotag auth

    stationId 0.c222.ce15.ce1.dab
    accessToken ...
    uri ...
    null 'https://radiotag.api.bbci.co.uk/ap/' { client: false, user: true, anonymous: false }

### CPA only

You can test any part of the cpa.js API by adding valid keys in the `cpa` section of the config.

Then run:

    SERVER=<name> bin/cpa <action>

e.g.

    SERVER=BBC bin/cpa register

    authProvider https://auth-cpa.ebu.io/
    clientName My CPA device
    clientId 100054
    clientSecret f8960c7c324588145e5ba627d3abd1ed
    domain bbc1-cpa.ebu.io
    softwareId cpa-radiotag-node-test
    softwareVersion 0.0.0
    Register success: client_id: 1039455   client_secret: d6560b27efe15df67af0a14c2a90b9cc


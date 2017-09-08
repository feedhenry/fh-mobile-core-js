# FeedHenry Mobile Core

Core SDK for the FeedHenry Mobile Control Panel. Used to obtain information
for services available to an application.

Although FeedHenry Mobile Core is written in TypeScript, compiled JavaScript is
published to npm. This means the library can be used in plain JavaScript
applications also.

## Using the library

```javascript
import { MobileCore, ServerConfig, ServiceConfig } from 'fh-mobile-core';

const mcpServerConfig = {
  host: 'http://localhost:3001',
  apiKey: 'example-key',
  appID: 'example-app'
};

MobileCore.configure(mcpServerConfig).then((serviceConfig) => {
  const syncConfig = serviceConfig.getConfigFor('fh-sync-server');

  // Initialise your sync client with syncConfig
});
```

# Developing

* Clone this repository
* Install dependencies - `yarn install`
* Make your change
* Add tests for your change
* Test your changes - `yarn test`

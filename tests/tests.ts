/**
 * fh-mobile-core is a very small library so there's currently not much to test
 * just confirm the ServiceConfig for now.
 */
import { MobileCore, DefaultServiceConfig } from '../main';
import * as tape from 'tape';

tape('Test MobileCoreServiceConfig', (t) => {
  t.plan(1);

  const serviceUri = 'http://example';
  const serviceConfiguration = {
    myService: {
      config: {
        uri: serviceUri
      }
    }
  };

  const conf = new DefaultServiceConfig(serviceConfiguration);
  t.assert(conf.getConfigFor('myService').uri === serviceUri);
});

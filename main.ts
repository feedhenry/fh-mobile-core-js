import { ServerConfig, ServiceConfig } from './src/types';
import Axios from 'axios';
/**
 * Obtain configuration for services available to the application.
 */

export module MobileCore {
  /**
   * Initialise the SDK, pull the services from the server for the application.
   * If the server is inaccessible a previously cached response will be
   * provided. If no cached copy is available the Promise will be rejected.
   *
   * @return {Promise}
   */
  export function configure(configuration: ServerConfig): Promise<ServiceConfig> {
    const url: string = configuration.host +  '/sdk/mobileapp/' + configuration.appID + '/config';

    return Axios.get(url, {
      headers: {
        'x-app-api-key': configuration.apiKey
      }
    }).then((res) => {
      return new DefaultServiceConfig(res.data);
    });
  }
}

export class DefaultServiceConfig implements ServiceConfig {
  private configuration: any;

  constructor(configuration: any) {
    this.configuration = configuration;
  }

  /**
   * Get configuration for a service by name. The structure of the
   * configuration is specific to each service. Refer to the documentation for
   * more details about a specific service.
   *
   * @param serviceName Name of the service
   * @returns {*} Configuration for the service
   */
  getConfigFor(serviceName: string): any {
    const service = this.configuration[serviceName];
    return service && service.config ? service.config : null;
  }
}

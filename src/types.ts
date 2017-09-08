export interface ServerConfig {
  host: string;
  apiKey: string;
  appID: string;
}

export interface ServiceConfig {
  getConfigFor(serviceName: string): any;
}

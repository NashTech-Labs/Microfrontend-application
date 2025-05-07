export const environment = {
  production: true,
  remoteEntryForTenantManagement: 'http://192.168.1.11:4201/remoteEntry.js',
  remoteEntryForCompanyManagement: 'http://192.168.1.11:4204/remoteEntry.js',
  appVersion: '1.0.0',
  api: {
    baseUrl: 'http://localhost:3000/',
    routes: {
      login: {endpoint: 'login', method: 'POST'},
      refresh: {endpoint: 'refreshToken', method: 'POST'}
    }
  }
};

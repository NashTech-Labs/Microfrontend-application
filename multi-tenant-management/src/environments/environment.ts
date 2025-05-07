
export const environment = {
  production: false,
  remoteEntryForTenantManagement: 'http://localhost:4201/remoteEntry.js',
  remoteEntryForCompanyManagement: 'http://localhost:4204/remoteEntry.js',
  appVersion: '1.0.0',
  api: {
    baseUrl: 'http://localhost:3000/',
    routes: {
      login: {endpoint: 'login', method: 'POST'},
      refresh: {endpoint: 'refreshToken', method: 'POST'},
      getSubscription: {endpoint: 'subscription', method: 'GET'},
    }
  }
};




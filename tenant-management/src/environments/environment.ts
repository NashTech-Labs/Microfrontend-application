

export const environment = {
  production: false,
  appVersion: '1.0.0',
  api: {
    baseUrl: 'http://localhost:3000/',
    routes: {
      createTenant: {endpoint: 'tenant', method: 'POST'},
      getTenant: {endpoint: 'tenant/', method: 'GET'},
      updateTenant: {endpoint: 'tenant/', method: 'PATCH'},
      deleteTenant: {endpoint: 'tenants/status/', method: 'PATCH'},
      createSubscription: {endpoint: 'subscription', method: 'POST'},
      getSubscription: {endpoint: 'subscription', method: 'GET'},
    }
  }
};



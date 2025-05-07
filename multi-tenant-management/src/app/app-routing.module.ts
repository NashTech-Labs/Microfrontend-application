import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WebComponentWrapper, WebComponentWrapperOptions
} from '@angular-architects/module-federation-tools';
import { MainComponent } from './main/main.component';


import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: 'angular',
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: environment.remoteEntryForTenantManagement,
          exposedModule: './tenant-management'
        })
          .then((m: any) => m.AppModule),
    },
    {
      path: 'react',
      component: WebComponentWrapper,
      data: {
        type: 'script',
        remoteEntry: environment.remoteEntryForCompanyManagement,
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element',
      } as WebComponentWrapperOptions,
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



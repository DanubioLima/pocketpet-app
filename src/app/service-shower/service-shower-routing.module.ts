import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceShowerPage } from './service-shower.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceShowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceShowerPageRoutingModule {}

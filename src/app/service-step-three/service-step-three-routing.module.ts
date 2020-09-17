import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceStepThreePage } from './service-step-three.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceStepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceStepThreePageRoutingModule {}

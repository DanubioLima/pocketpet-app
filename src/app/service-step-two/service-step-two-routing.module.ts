import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceStepTwoPage } from './service-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceStepTwoPageRoutingModule {}

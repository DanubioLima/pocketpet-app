import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceStepFourPage } from './service-step-four.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceStepFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceStepFourPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceStepTwoPageRoutingModule } from './service-step-two-routing.module';

import { ServiceStepTwoPage } from './service-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceStepTwoPageRoutingModule
  ],
  declarations: [ServiceStepTwoPage]
})
export class ServiceStepTwoPageModule {}

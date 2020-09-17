import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceStepFourPageRoutingModule } from './service-step-four-routing.module';

import { ServiceStepFourPage } from './service-step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceStepFourPageRoutingModule
  ],
  declarations: [ServiceStepFourPage]
})
export class ServiceStepFourPageModule {}

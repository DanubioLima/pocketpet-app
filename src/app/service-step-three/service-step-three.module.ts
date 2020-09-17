import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceStepThreePageRoutingModule } from './service-step-three-routing.module';

import { ServiceStepThreePage } from './service-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceStepThreePageRoutingModule
  ],
  declarations: [ServiceStepThreePage]
})
export class ServiceStepThreePageModule {}

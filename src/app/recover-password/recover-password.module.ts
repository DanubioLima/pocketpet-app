import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecoverPasswordPageRoutingModule } from "./recover-password-routing.module";

import { RecoverPasswordPage } from "./recover-password.page";

import { BrMaskerModule } from "br-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPasswordPageRoutingModule,
    BrMaskerModule,
  ],
  declarations: [RecoverPasswordPage],
})
export class RecoverPasswordPageModule {}

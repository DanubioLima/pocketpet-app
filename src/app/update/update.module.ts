import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UpdatePageRoutingModule } from "./update-routing.module";

import { UpdatePage } from "./update.page";

import { BrMaskerModule } from "br-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePageRoutingModule,
    BrMaskerModule,
  ],
  declarations: [UpdatePage],
})
export class UpdatePageModule {}

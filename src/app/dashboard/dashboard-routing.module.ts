import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardPage } from "./dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: DashboardPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "service-shower",
        loadChildren: () =>
          import("../service-shower/service-shower.module").then((m) => m.ServiceShowerPageModule),
      },
      {
        path: "",
        redirectTo: "/dashboard/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "dashboard/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}

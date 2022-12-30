import { PlaygroundComponent } from "./playground.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: PlaygroundComponent,
    children: [
      {
        path: "css-binding",
        loadChildren: () =>
          import("./pages/first/first.module").then((m) => m.FirstModule),
      },
      {
        path: "check-box",
        loadChildren: () =>
          import("./pages/check-box/check-box.module").then(
            (m) => m.CheckBoxModule
          ),
      },
      {
        path: "**",
        redirectTo: "",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}

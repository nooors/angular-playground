import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "playground",
    loadChildren: () =>
      import("./pages/playground/playground.module").then(
        (m) => m.PlaygroundModule
      ),
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

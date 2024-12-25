import { PlaygroundComponent } from './playground.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
    children: [
      {
        path: 'css-binding',
        loadChildren: () =>
          import('./pages/css-binding/css-binding.module').then(
            (m) => m.CssBindingModule
          ),
      },
      {
        path: 'check-box',
        loadChildren: () =>
          import('./pages/check-box/check-box.module').then(
            (m) => m.CheckBoxModule
          ),
      },
      {
        path: 'animations',
        loadChildren: () =>
          import('./pages/animations/animations.module').then(
            (m) => m.AnimationsModule
          ),
      },
      {
        path: 'custom-directives',
        loadChildren: () =>
          import('./pages/custom-directives/custom-directives.module').then(
            (m) => m.CustomDirectivesModule
          ),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}

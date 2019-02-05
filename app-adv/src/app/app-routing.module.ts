import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'game', loadChildren: '../modules/game/game.module#GameModule' },
  { path: 'items', loadChildren: '../modules/items/items.module#ItemsModule' },
  { path: 'register-form', loadChildren: '../modules/register-form/register-form.module#RegisterFormModule' },
  { path: 'card', loadChildren: '../modules/card/card.module#CardModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

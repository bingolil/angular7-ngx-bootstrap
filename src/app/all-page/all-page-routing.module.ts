import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsoleMenuComponent } from './console-menu/console-menu.component';
import { Error404Component } from './error404/error404.component';
import { BeginUiComponent } from './begin-ui/begin-ui.component';
import { LowIe9Component } from './low-ie9/low-ie9.component';

const routes: Routes = [
  {path:'',redirectTo:'console-menu',pathMatch:'full'},
  {path:'console-menu',component:ConsoleMenuComponent},
  {path:'error404',component:Error404Component},
  {path:'begin-ui',component:BeginUiComponent},
  {path:'low-ie9-ui',component:LowIe9Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPageRoutingModule { }

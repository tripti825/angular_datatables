import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const headerRoutes: Routes = [
  
];

@NgModule({
  imports: [
    RouterModule.forChild(headerRoutes)
  ],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

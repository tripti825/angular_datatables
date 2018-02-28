import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const footerRoutes: Routes = [
  
];

@NgModule({
  imports: [
    RouterModule.forChild(footerRoutes)
  ],
  exports: [RouterModule]
})
export class FooterRoutingModule { }

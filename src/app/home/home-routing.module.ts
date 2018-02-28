import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AlwaysAuthGuard } from '../_service/guard.service';

const homeRoutes: Routes = [
	{ path: 'home',  component: HomeComponent, canDeactivate: [AlwaysAuthGuard], canActivate: [AlwaysAuthGuard] },
];

@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRoutingModule { }

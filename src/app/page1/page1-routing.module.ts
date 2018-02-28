import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1.component';
import { AlwaysAuthGuard } from '../_service/guard.service';

const page1Routes: Routes = [
	{ path: 'page1',  component: Page1Component, canActivate: [AlwaysAuthGuard] },
];

@NgModule({
	imports: [
		RouterModule.forChild(page1Routes)
	],
	exports: [
		RouterModule
	]
})
export class Page1RoutingModule { }

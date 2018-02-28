import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page2Component } from './page2.component';
import { AlwaysAuthGuard } from '../_service/guard.service';

const page2Routes: Routes = [
	{ path: 'page2',  component: Page2Component, canActivate: [AlwaysAuthGuard] }
];

@NgModule({
	imports: [
		RouterModule.forChild(page2Routes)
	],
	exports: [
		RouterModule
	]
})
export class Page2RoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page2viewComponent } from './page2view.component';
import { AlwaysAuthGuard } from '../../_service/guard.service';

const page2viewRoutes: Routes = [
	{ path: 'page2/view',  component: Page2viewComponent, canActivate: [AlwaysAuthGuard] }
];

@NgModule({
	imports: [
		RouterModule.forChild(page2viewRoutes)
	],
	exports: [
		RouterModule
	]
})
export class Page2viewRoutingModule { }

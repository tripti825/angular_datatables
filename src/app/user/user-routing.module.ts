import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { AlwaysAuthGuard } from '../_service/guard.service';

const userRoutes: Routes = [
	{ path: 'user',  component: UserComponent, canActivate: [AlwaysAuthGuard] },
];

@NgModule({
	imports: [
		RouterModule.forChild(userRoutes)
	],
	exports: [
		RouterModule
	]
})
export class UserRoutingModule { }

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DataTablesModule,
		UserRoutingModule,
		LoginModule,
		SignupModule
	],
	declarations: [
		UserComponent,
	],
	exports: [
		UserComponent
	]
})
export class UserModule {}

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { Page1Component } from './page1.component';
import { Page1RoutingModule } from './page1-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DataTablesModule,
		Page1RoutingModule
	],
	declarations: [
		Page1Component,
	],
	exports: [
		Page1Component
	]
})
export class Page1Module {}

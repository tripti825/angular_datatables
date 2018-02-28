import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { Page2viewComponent } from './page2view.component';

import { Page2viewRoutingModule } from './page2view-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		Page2viewRoutingModule
	],
	declarations: [
		Page2viewComponent 
	],
	exports: [
		Page2viewComponent
	]
})
export class Page2viewModule {}

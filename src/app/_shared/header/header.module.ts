import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [HeaderRoutingModule, ReactiveFormsModule, CommonModule],
	exports: [
		HeaderComponent
	]
})

export class HeaderModule {}
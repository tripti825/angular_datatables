import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer.component';
import { FooterRoutingModule } from './footer-routing.module';

@NgModule({
	declarations: [
		FooterComponent
	],
	imports: [FooterRoutingModule, ReactiveFormsModule, CommonModule],
	exports: [
		FooterComponent
	]
})

export class FooterModule {}
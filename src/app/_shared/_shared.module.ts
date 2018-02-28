import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LoaderModule } from './loader/loader.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HeaderModule,
		FooterModule,
		LoaderModule 
	],
	declarations: [],
	exports: [
		HeaderModule,
		FooterModule,
		LoaderModule 
	]
})
export class SharedModule {}

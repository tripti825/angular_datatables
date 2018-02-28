import { NgModule 			 } from '@angular/core';
import { CommonModule 		 } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { DataTablesModule 	 } from 'angular-datatables';

import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { MatInputModule		 } from '@angular/material/input';

import { Page2Component 	 } from './page2.component';
import { Page2RoutingModule  } from './page2-routing.module';

import { Page2viewModule	 } from './page2view/page2view.module'; 

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DataTablesModule,
		MatSlideToggleModule,
		MatPaginatorModule,
		MatDatepickerModule,
		MatInputModule,
		Page2RoutingModule,
		Page2viewModule
	],
	declarations: [
		Page2Component 
	],
	exports: [
		Page2Component
	],
})
export class Page2Module {}

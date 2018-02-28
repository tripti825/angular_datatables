import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AlwaysAuthGuard } from './_service/guard.service';
import { PageNotFoundComponent }    from './not-found.component';

const routes: Routes = [
  { path: ''	, redirectTo: '/login', pathMatch: 'full' },
  {	path: '404', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
	constructor(private router: Router) {
		this.router.errorHandler = (error: any) => {
			this.router.navigate(['/404']); // or redirect to default route
		}
	  }
}

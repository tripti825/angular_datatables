import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from "@angular/router";
import { LoggedinService } from './isLoggedIn.service';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AlwaysAuthGuard implements CanActivate, CanDeactivate<CanComponentDeactivate> {
  constructor(private loggedinservice: LoggedinService, private router: Router) {}

  canActivate() {
    if (this.loggedinservice.isLoggedIn()) { 
      return true;
    } else {
      window.alert("Login to view this page"); 
      this.router.navigate(['/login']); 
      return false;
    }
  }

  canDeactivate(component: CanComponentDeactivate) {
  	return component.canDeactivate ? component.canDeactivate() : true;
  }
}



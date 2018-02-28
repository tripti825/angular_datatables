import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable()
export class LoggedinService {

 loginFlag : String; 
 constructor(private crudservice: CrudService) { }

  isLoggedIn(): boolean {
  	this.loginFlag = localStorage.getItem('isLoggedIn')?localStorage.getItem('isLoggedIn'): 'false';
  	
    if(this.loginFlag == 'true')
    	return true;
    else
    	return false;
  }
}
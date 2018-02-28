import { Component, OnInit } from '@angular/core';

import { LoggedinService } from '../../_service/isLoggedIn.service';
import { Router} from '@angular/router';

@Component({
  selector: 'header-dir',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private loggedinservice: LoggedinService, private router: Router) { }

  ngOnInit() {}

  logout() {
  	localStorage.removeItem('isLoggedIn');
  	this.router.navigate(['/login']); 
  }

}

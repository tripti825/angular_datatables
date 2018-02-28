import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup,  Validators} from "@angular/forms";
import { Http, HttpModule, Response  } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { CrudService} from '../../_service/crud.service';
import { LoggedinService} from '../../_service/isLoggedIn.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formData: {};
  loading: Boolean = false;

  constructor(private crudservice: CrudService, public toastr: ToastsManager, vcr: ViewContainerRef, private fb: FormBuilder, private http:Http, public router: Router, private loggedinservice:LoggedinService) {
  	this.createForm();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    //if a user is logged in, hitting /login will redirect it to home page
    if(this.loggedinservice.isLoggedIn() == true) {
      this.router.navigate(['/home']);
    }
  }

  canDeactivate () {
    if((this.form.value.username && this.form.value.username != null) || (this.form.value.password && this.form.value.password != null)){
      return window.confirm('Discard current data?');
    }
    return true;
  }

  @ViewChild('fileInput') fileInput: ElementRef;
 
  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

 onSubmit() {
    this.formData = this.form.value;

    this.loading = true;
    
    this.crudservice.commonCurdOperation('user','login', false, this.formData)
    .subscribe((res: Response) => {if(res.status == 200){ this.handleSuccessResponse()} else{ this.handleFailureResponse()}},
                err => this.handleFailureResponse() );
 }

 handleSuccessResponse() {
    localStorage.setItem('isLoggedIn', 'true');
    this.toastr.success( 'Login Successful', 'Success');
    this.loading = true;


    setTimeout(() => {
       this.router.navigate(['/home']); 
    }, 1000);
  }

 handleFailureResponse() {
    localStorage.setItem('isLoggedIn', 'false');
    this.toastr.error('Something went wrong!', 'Oops!');
    this.loading = false;

    this.clearFile();
  }

 clearFile() {
    this.form.get('username').setValue(null);
    this.form.get('password').setValue(null);
    this.fileInput.nativeElement.value = '';
    
  }

  forgotPassword(){
    this.toastr.error('Option is disabled for now!', 'Oops!');
  }

  
}

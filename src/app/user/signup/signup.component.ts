import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup,  Validators} from "@angular/forms";
import { Http, HttpModule, Response  } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { CrudService} from '../../_service/crud.service';
import { LoggedinService} from '../../_service/isLoggedIn.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  formData: {};
  loading: Boolean = false;

  constructor(private crudservice: CrudService, public toastr: ToastsManager, vcr: ViewContainerRef, private fb: FormBuilder, private http:Http, public router: Router, private loggedinservice:LoggedinService) {
  	this.createForm();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    //if a user is logged in, hitting /signup will redirect it to home page
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
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formData = this.form.value;

    this.loading = true;
    
    this.crudservice.commonCurdOperation('user','create', false, this.formData)
    .subscribe((res: Response) => {
    				if(res.status == 200){this.loading = false; this.clearFile();this.toastr.success( 'Sign Up completed', 'Success'); this.handleResponse();} else{this.toastr.error('Something went wrong!', 'Oops!'); this.clearFile(); this.loading = false;}},
                       err => {this.loading = false; this.clearFile(); this.toastr.error('Something went wrong!', 'Oops!');});
 }

 handleResponse() {
    this.loading = true;
    setTimeout(() => {
       this.router.navigate(['/login']); 
    }, 1000);
  }

 clearFile() {
    this.form.get('name').setValue(null);
    this.form.get('username').setValue(null);
    this.form.get('password').setValue(null);
    this.form.get('confirmpassword').setValue(null);
    this.fileInput.nativeElement.value = '';
  	
  }


}

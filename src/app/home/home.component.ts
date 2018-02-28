import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup,  Validators} from "@angular/forms";
import { Http, HttpModule, Response  } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { CrudService} from '../_service/crud.service';

@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  src: string = "";
  form: FormGroup;
  loading: boolean = false;
  filesToUpload: Array<File>;

  ngOnInit() {}

  constructor(private crudservice: CrudService, public toastr: ToastsManager, vcr: ViewContainerRef, private fb: FormBuilder, private http:Http) {
    this.createForm();
    this.toastr.setRootViewContainerRef(vcr);
  }
  
  @ViewChild('fileInput') fileInput: ElementRef;
 
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

   canDeactivate () {
    if((this.form.value.name && this.form.value.name != null) || (this.form.value.file && this.form.value.file != null)){
      return window.confirm('Discard current data?');
    }
    return true;
  }

   onFileChange(event) {
   this.filesToUpload = <Array<File>> event.target.files;

    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
      this.src = reader.result;
        this.form.get('file').setValue({
          filename: file.name
          //filetype: file.type
          //value: reader.result.split(',')[1]
        })
      };
    }
   
  }

  onSubmit() {
    var formData: any = new FormData();
              for(let filetoupload of this.filesToUpload) {
                formData.append("file",  filetoupload,  filetoupload.name);
              }              
        formData.append("name ", this.form.controls.name.value)

    this.loading = true;
    
    this.crudservice.commonCurdOperation('file','create', true, formData)
    .subscribe((res: Response) => {
                        if(res.status == 200){this.loading = false; this.clearFile(); this.toastr.success( 'File uploaded', 'Success');} else {this.toastr.error('Something went wrong!', 'Oops!'); this.clearFile(); this.loading = false;}},
                       err => {this.loading = false; this.clearFile(); this.toastr.error('Something went wrong!', 'Oops!');});
 }

  clearFile() {
    this.form.get('file').setValue(null);
    this.form.get('name').setValue(null);
    this.fileInput.nativeElement.value = '';
  	this.src = "";
  }

}

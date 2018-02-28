import { Component, OnInit, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { Http, HttpModule, Response  } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { DataTableDirective } from 'angular-datatables';

import { CrudService} from '../_service/crud.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})

export class Page1Component implements OnInit {
  filelist: Array<any> = [];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {}; 

  enableEditFlag :boolean = false;
  enableEditId : string;
  newname : string ;
  extension: string;
  
  constructor(private http: Http, private el: ElementRef, private crudservice: CrudService, public toastr: ToastsManager, vcr: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vcr);
	}

  ngOnInit() {
    /*DataTables configuration and initialization*/
  	this.dtOptions = {
  		pageLength: 4,
  		lengthMenu: [4, 10, 25, 50, 100],
  	      columns: [{
  	        title: 'Image'
  	      }, {
  	        title: 'Name'
  	      }, {
  	        title: 'Image',
  	        class: 'none'
  	      },
		      {
  	        title: 'Actions'
  	      }],
  	      // Use this attribute to enable the responsive extension
  	      responsive: true,
  	      // Declare the use of the extension in the dom parameter
  	      dom: 'lfrtBip',
  	      // Configure the buttons
  	      buttons: [
  	        'copy'	        
  	      ],
          select: true
  	};
	
	  this.getFiles();
  }

    /*to enable edit option for a file*/
    enableEdit (id: string, name:string) {
    
      if(this.enableEditFlag == false) {
        this.enableEditFlag = true;
        this.enableEditId = id;
        this.newname = name;
        this.extension = name.split('.').pop();
      }else {
        this.enableEditFlag = false;
        this.enableEditId = '';
        this.newname = '';
        this.extension = '';
      }
    }

    editFile (id: string, name: string) {
      if(name.split('.').pop() != this.extension)
        name += '.' + this.extension;
      
      this.crudservice.commonCurdOperation('file', 'update', false, {id: id, name: name})
            .subscribe((res: Response) => { if(res.status == 200) {this.toastr.success( 'File updated',   'Success'); this.updateTable(); this.enableEditFlag = false; this.enableEditId = '';this.newname = '';} 
              else {this.toastr.error('Something went wrong!', 'Oops!');}
               },err => { this.toastr.error('Something went wrong!', 'Oops!');});
    }
	
    /*to delete a file using id*/
    deleteFile (id: string, name: string) {
    	if(confirm("Are you sure you want to delete "+name)) {
    		this.crudservice.commonCurdOperation('file', 'delete', false, {id: id})
            .subscribe((res: Response) => { if(res.status == 200) {this.toastr.success( 'File deleted',   'Success'); this.updateTable();} 
    					else {this.toastr.error('Something went wrong!', 'Oops!');}
           		 },err => { this.toastr.error('Something went wrong!', 'Oops!');});
    	}
    	
    }

    /*to get list of all files*/
    getFiles () {
      this.crudservice.commonCurdOperation('file','read', false)
          .subscribe(filelist => {this.filelist = filelist.data; this.dtTrigger.next();},
                       err => {this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR")});
    }

   /*to update/ refresh the table */
   updateTable () {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      this.getFiles();
      
    });
   }
}

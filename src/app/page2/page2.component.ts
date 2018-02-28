import { Component, OnInit, ElementRef, ViewContainerRef, ViewChild, ErrorHandler } from '@angular/core';
import { Router } from "@angular/router";
import { Http, HttpModule, Response  } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormControl, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { PageEvent} from '@angular/material';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import 'rxjs/add/operator/map';

import { CrudService} from '../_service/crud.service';
declare var $: any;

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  appdata: Array<any> = [];
  term   = new FormControl();
  foundrecord;
  pagecolumn: Array<any> = [];
  
  pageLength;
  pageSizeOptions = [4, 10, 25, 50, 100];
  pageEvent: PageEvent;
  pageOption = {
    page : 1,
    limit : 4
  }

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  
  constructor(private http: Http, private el: ElementRef, private crudservice: CrudService, public toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) {
		this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  	this.initializetable();

    /*OBSERVABLE*/
    this.term.valueChanges
                .debounceTime(400)        // wait for 400ms pause in events
                .distinctUntilChanged()   // ignore if next search term is same as previous
                .subscribe(term => {
                  if(term != '')
                    this.searchText(term);
                  else
                    this.getFiles();
                });
  }

  ngAfterContentInit() {
    var self = this;
    $('table').on( 'click', '#delete', function (evt) {
        let index  = ($(this).closest('td').parent()[0].sectionRowIndex);
        let record = self.appdata[index];
        self.deleteRecord(record._id, record.first_name, record._action_disabled); 
    } );

    $('table').on( 'click', '#view', function (evt) {
        let index  = ($(this).closest('td').parent()[0].sectionRowIndex);
        let record = self.appdata[index];
        self.navigatetoview(record._id, record._action_disabled); 
    } );
  }

  
                                            /* CRUD FUNCTIONS */
  
  /*to get list of all files */
  getFiles (columns?:Array<any>) {
    this.crudservice.commonCurdOperation('appdata','read', false, {}, this.pageOption)
        .subscribe(appdata => {
            this.appdata = appdata.data.docs; 
            this.pageLength = appdata.data.total; 

            if(columns) {
              let rowitems : Array<any> = [];
              let rows : Array<any> = [];
              for(let item of this.appdata)
                rows.push(item);
              for(let key in rows){
                var rowdata: Array<any> = [];
                for(let col of columns){
                  rowdata.push((rows[key])[col.title])
                }
                rowitems.push(rowdata)
              }
              this.dtOptions.data = rowitems;
              this.dtTrigger.next();
              this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.columns().every(function () {
                  const that = this;
                  $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                      that
                        .search(this['value'])
                        .draw();
                    }
                  });
                });
              });
            }else {
              this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.destroy();
                let rowitems : Array<any> = [];
                let rows : Array<any> = [];
                for(let item of this.appdata)
                  rows.push(item);
                for(let key in rows){
                  var rowdata: Array<any> = [];
                  for(let col of this.pagecolumn){
                    rowdata.push((rows[key])[col.title])
                  }
                  rowitems.push(rowdata)
                }
                this.dtOptions.data = rowitems;
                this.dtOptions.aaData = rowitems;
                this.dtTrigger.next();
              })
            }
            
        },err => {this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR")});
  }
  
  /*to delete a record using id */
  deleteRecord (id: string, name: string, actionflag: boolean) {
    if(!actionflag) {
      if(confirm("Are you sure you want to delete "+name+"'s record?")) {
        this.crudservice.commonCurdOperation('appdata', 'delete', false, {id: id})
            .subscribe((res: Response) => { if(res.status == 200) {this.toastr.success( 'Record deleted',   'Success'); this.getFiles();} 
              else {this.toastr.error('Something went wrong!', 'Oops!');}
            },err => { this.toastr.error('Something went wrong!', 'Oops!');});
      }
    }
  }

  /*to edit a record usinf id */
  // editToggle (id: string, actionflag: boolean) {
  //   var newflag : boolean = !actionflag;
  //   this.crudservice.commonCurdOperation('appdata', 'update', false, {id: id}, {action_disabled : newflag})
  //         .subscribe((res: Response) => { if(res.status == 200) { this.getFiles();} 
  //           else {this.toastr.error('Something went wrong!', 'Oops!');}
  //             },err => { this.toastr.error('Something went wrong!', 'Oops!');});
  // }
  
                                            /* EXTRA FUNCTIONS */

  /* to navigate to new page for view action */
  navigatetoview (id: string, actionflag: boolean) {
    if(!actionflag) {
      this.router.navigate(['/page2/view'], { queryParams: { id: id } });
    }
  }

  /* to handle pagination event */
  paginateEvent(evt) {
    this.pageOption.page  = ++evt.pageIndex;
    this.pageOption.limit = evt.pageSize;
    this.getFiles();
  }

  /*to search a text */
  searchText ( term: string) {
    
    this.crudservice.commonCurdOperation('appdata','search', false, {_id: "5a389ac49ef28be9a412967a"})
        .subscribe(appdata => {this.foundrecord = appdata.data;
                                var self = this;
                                this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                                  dtInstance.destroy();
                                  let rowitems : Array<any> = [];
                                  let rows : Array<any> = [];
                                  for(let item of self.foundrecord)
                                    rows.push(item);
                                  for(let key in rows){
                                    var rowdata: Array<any> = [];
                                    for(let col of self.pagecolumn){
                                      rowdata.push((rows[key])[col.title])
                                    }
                                    rowitems.push(rowdata)
                                  }

                                  this.dtOptions.data = rowitems;
                                  this.dtOptions.aaData = rowitems;
                                  this.dtTrigger.next();
                                })
                              },
                    err => {this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR")});

    // return this.foundrecord;
  }

  /*to get list of all columns and initialize the datatable */
  initializetable () {
    this.crudservice.commonCurdOperation('appdata','fetch', false, {}, {})
        .subscribe(appdata => {
          let columns : Array<any> = [];
          for(let item of appdata.data.sort()){
            let obj: {title: string, sTitle: string, defaultContent: string} = {
              title: item,
              sTitle: item,
              defaultContent:"-"
            };
            columns.push(obj);
          }

          // if we want an extra column for action buttons
          columns.push({title: 'actions', 
                        sTitle: 'actions', 
                        defaultContent: '<button id="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>'+
                                        '<button id="view"><i class="fa fa-eye" aria-hidden="true"></i></button>'});
          this.pagecolumn = columns;
          this.dtOptions = {
            columns : columns,
            dom: 'Bt',
            stateSave: true,
            buttons: [
             'colvis'
            ]
          };
          
          this.getFiles(columns);
        },err => {this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR")});
  }

  

}
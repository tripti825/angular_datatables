import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { CrudService} from '../../_service/crud.service';

@Component({
  selector: 'app-page2view',
  templateUrl: './page2view.component.html',
  styleUrls: ['./page2view.component.css']
})
export class Page2viewComponent implements OnInit {
  id: string;
  appdata: object;
  constructor(private route: ActivatedRoute, private crudservice: CrudService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
  	this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  	this.route.queryParams.subscribe(translatedValue => {this.id = translatedValue.id });
  	this.getData(this.id);
  }

  getData (id: string) {
  	this.crudservice.commonCurdOperation('appdata','read', false, {_id: this.id})
          .subscribe(appdata => {this.appdata = appdata.data.docs[0];},
                       err => { this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR")});
  }

}

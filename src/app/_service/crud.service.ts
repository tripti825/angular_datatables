import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, RequestOptions, Headers  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudService{
  
  private useUrl = 'http://192.168.0.110:4200/api';
  constructor(private http: Http) { }

  commonCurdOperation(model: string, action: string, form?:boolean, packet?: {}, packetoptions?: {}): Observable<any> {

  	let newUseUrl = this.useUrl + '/'+ model + '/'+ action;
  	let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    var newPacket: any;

    if(form === true) { newPacket = packet} else { newPacket = {'packet': packet}}
    if(packetoptions) {newPacket.options = packetoptions} else {newPacket.options = {}}
    return this.http.post(newUseUrl, newPacket)
			.map((res: Response) => (res.json()))
			.catch((error: any) => Observable.throw(error.json().error || 'Something went wrong'))
	
  }
}

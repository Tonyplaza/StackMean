import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Lineitems } from "../../models/lineitems";

@Injectable({
  providedIn: 'root'
})
export class LineitemsService {
  selectedLineItems !: Lineitems ;
  lineitemss !: Lineitems [];
  readonly URL_API = "http://localhost:4000/api/lineItem";
  constructor(private http: HttpClient) {
	this.selectedLineItems  = new Lineitems ();
 	}
	postEmployee(lineItemss : Lineitems ) {
    return this.http.post(this.URL_API, lineItemss );
  }

  getEmployees() {
    return this.http.get<Lineitems []>(this.URL_API);
  }

  putEmployee(lineItemss : Lineitems ) {
    return this.http.put(this.URL_API + `/${lineItemss._id}`, lineItemss );
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

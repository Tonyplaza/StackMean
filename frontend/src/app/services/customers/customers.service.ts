import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Customers } from "../../models/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  selectedCustomers!: Customers;
  customerss!: Customers[];
  readonly URL_API = "http://localhost:4000/api/customers";
  constructor(private http: HttpClient) {
	this.selectedCustomers = new Customers();
 }

  postEmployee(customerss: Customers) {
    return this.http.post(this.URL_API, customerss);
  }

  getEmployees() {
    return this.http.get<Customers[]>(this.URL_API);
  }

  putEmployee(customerss: Customers) {
    return this.http.put(this.URL_API + `/${customerss._id}`, customerss);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

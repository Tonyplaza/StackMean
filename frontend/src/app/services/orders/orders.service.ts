import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Orders } from "../../models/orders";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  selectedOrders!: Orders;
  orderss!: Orders[];
  readonly URL_API1 = "http://localhost:4000/api/orders";
  constructor(private http: HttpClient) {
	this.selectedOrders = new Orders();
 }
  postEmployee(orderss: Orders) {
    return this.http.post(this.URL_API1, orderss);
  }

  getEmployees() {
    return this.http.get<Orders[]>(this.URL_API1);
  }

  putEmployee(orderss: Orders) {
    return this.http.put(this.URL_API1 + `/${orderss._id}`, orderss);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API1 + `/${_id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Products } from "../../models/products";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selectedProducts!: Products;
  productss!: Products[];
  readonly URL_API3 = "http://localhost:4000/api/products";
  constructor(private http: HttpClient) {
	this.selectedProducts = new Products();
 }
  postEmployee(productss: Products) {
    return this.http.post(this.URL_API3, productss);
  }

  getEmployees() {
    return this.http.get<Products[]>(this.URL_API3);
  }

  putEmployee(productss: Products) {
    return this.http.put(this.URL_API3 + `/${productss._id}`, productss);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API3 + `/${_id}`);
  }
}

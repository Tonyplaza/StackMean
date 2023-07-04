import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../services/products/products.service";
import { NgForm } from "@angular/forms";
import { Products } from "../../models/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
	this.getEmployees();
  }
  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.productsService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.productsService.postEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  getEmployees() {
    this.productsService.getEmployees().subscribe((res) => {
      this.productsService.productss = res;
    });
  }

  editEmployee(products: Products) {
    this.productsService.selectedProducts = products;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm("¿Estás seguro de que quieres borrarlo?")) {
      this.productsService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productsService.selectedProducts = new Products();
    }
  }
}

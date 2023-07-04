import { Component, OnInit } from '@angular/core';

import { OrdersService } from "../../services/orders/orders.service";
import { NgForm } from "@angular/forms";
import { Orders } from "../../models/orders";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public ordersService: OrdersService) { }

  ngOnInit() {
	this.getEmployees();
  }
  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.ordersService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.ordersService.postEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  getEmployees() {
    this.ordersService.getEmployees().subscribe((res) => {
      this.ordersService.orderss = res;
    });
  }

  editEmployee(orders: Orders) {
    this.ordersService.selectedOrders = orders;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm("¿Estás seguro de que quieres borrarlo?")) {
      this.ordersService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ordersService.selectedOrders = new Orders();
    }
  }
}

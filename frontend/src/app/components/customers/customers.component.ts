import { Component, OnInit } from '@angular/core';

import { CustomersService } from "../../services/customers/customers.service";
import { NgForm } from "@angular/forms";
import { Customers } from "../../models/customers";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public customersService: CustomersService) {}

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.customersService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.customersService.postEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  getEmployees() {
    this.customersService.getEmployees().subscribe((res) => {
      this.customersService.customerss = res;
    });
  }

  editEmployee(customers: Customers) {
    this.customersService.selectedCustomers = customers;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm("¿Estás seguro de que quieres borrarlo?")) {
      this.customersService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.customersService.selectedCustomers = new Customers();
    }
  }
}

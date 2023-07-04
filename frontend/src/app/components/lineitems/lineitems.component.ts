import { Component, OnInit } from '@angular/core';

import { LineitemsService } from "../../services/lineitems/lineitems.service";
import { NgForm } from "@angular/forms";
import { Lineitems } from "../../models/lineitems";

@Component({
  selector: 'app-lineitems',
  templateUrl: './lineitems.component.html',
  styleUrls: ['./lineitems.component.css']
})
export class LineitemsComponent implements OnInit {

   constructor(public lineitemsService: LineitemsService) {}

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.lineitemsService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.lineitemsService.postEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  getEmployees() {
    this.lineitemsService.getEmployees().subscribe((res) => {
      this.lineitemsService.lineitemss = res;
    });
  }

  editEmployee(lineitems: Lineitems) {
    this.lineitemsService.selectedLineItems = lineitems;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm("¿Estás seguro de que quieres borrarlo?")) {
      this.lineitemsService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.lineitemsService.selectedLineItems = new Lineitems();
    }
  }
}
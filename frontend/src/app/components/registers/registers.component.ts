import { Component, OnInit } from '@angular/core';

import { RegistersService } from "../../services/registers/registers.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  constructor(public registersService: RegistersService) { }

  ngOnInit(): void {
  }
	
	getUserName(form: NgForm){
	var fo = form.value.username;
	var fovalue= form.value;
		this.registersService.getUserName(form.value.username).subscribe(
		res => {	
			var nombre = this.registersService.Registers=res;
			var username = new Array(1);
			if (nombre){
			username = nombre.map(function(x){
				return x.username;
			});
			}
			var n = username[0];
			var x = fo;
				if(x==n){
					alert("El usuario ya existe")
				}else{
					this.registersService.postRegister(fovalue).subscribe((res) => {
      					});
					alert("Registro creado")
					window.open("http://localhost:4200/login","_self");
					}			
		},
		err => console.log(err)
		);	
	}
	
	resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}

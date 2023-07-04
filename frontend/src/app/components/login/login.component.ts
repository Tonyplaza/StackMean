import { Component, OnInit, Input } from '@angular/core';

import { RegistersService } from "../../services/registers/registers.service";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  constructor(public registersService: RegistersService) { }

  ngOnInit(): void {
  }
	
	getComprobacion(form: NgForm){
	var fo = form.value.username;
	var foPass= form.value.password;
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
			//Comprobar nombre
				if(x==n){
					this.registersService.getPassword(foPass).subscribe(
					res => {	
						var pass = this.registersService.Registers=res;
								var password = new Array(1);
								if (pass){
								password = pass.map(function(x){
									return x.password;
								});
								}
								var pbuscada = password[0];
								var pingresada = foPass;
								//Comprobar password
									if(pbuscada==pingresada){
										this.registersService.setToken(n);
										window.open("http://localhost:4200/home","_self");
									}else{
										alert("La contrasena es incorrecta")
									}
					},
					err => console.log(err)
					);			
					
				}else{
					alert("El usuario no existe")
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

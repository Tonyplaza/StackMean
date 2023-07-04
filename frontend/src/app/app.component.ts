import { Component, OnInit, Input, DoCheck } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from "@angular/forms";
import {RegistersService} from "../../src/app/services/registers/registers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'app';
dataEntrada:boolean;
constructor(private at: RegistersService , private router: Router){
	
}
ngDoCheck(){
	this.dataEntrada=this.at.isloger();
}

ngOnInit(){
	this.dataEntrada=this.at.isloger();
}

cerrarsession(){
	this.at.deleteToken();
	this.router.navigate(['/login']);
}

}


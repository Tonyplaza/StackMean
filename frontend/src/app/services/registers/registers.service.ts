import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Registers} from '../../models/registers';
import { AppComponent } from "../../app.component";

@Injectable({
  providedIn: 'root'
})
export class RegistersService {
	selectedRegister: Registers={
		name: '',
   		username: '',
   		password: ''
	};
	
	URL_API='http://localhost:4000/api/registers';
	URL_API2='http://localhost:4000/api/registers/username';
	URL_API3='http://localhost:4000/api/registers/password';
	
	Registers!: Registers[];
  constructor(private http: HttpClient) { }

	postRegister(registers: Registers) {
    	return this.http.post(this.URL_API, registers);
  	}
	getUserName(username: string) {
		
    	return this.http.get<Registers[]>(this.URL_API2 + `/${username}`);
  	}
	getPassword(password: string) {
    	return this.http.get<Registers[]>(this.URL_API3 + `/${password}`);
  	}

	setToken(data : string){
		localStorage.setItem('tokens',data);
	}
	
	deleteToken(){
		localStorage.removeItem('tokens');
	}
	
	getToken(){
		return localStorage.getItem('tokens');
	}
	
	isloger(){
		const sesion = this.getToken() ;
		if (sesion != null){
			return true;
		}else{
			return false;
		}
	}
}

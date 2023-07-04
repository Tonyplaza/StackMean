import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import {app_routing} from "./app.routes"; 

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LineitemsComponent } from './components/lineitems/lineitems.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistersComponent } from './components/registers/registers.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    LineitemsComponent,
    OrdersComponent,
    ProductsComponent,
    RegistersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
	app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

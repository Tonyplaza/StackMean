import {RouterModule, Routes} from '@angular/router';

import{HomeComponent} from "./components/home/home.component";
import{CustomersComponent} from "./components/customers/customers.component";
import{LineitemsComponent} from "./components/lineitems/lineitems.component";
import{OrdersComponent} from "./components/orders/orders.component";
import{ProductsComponent} from "./components/products/products.component";
import{RegistersComponent} from "./components/registers/registers.component";
import{LoginComponent} from "./components/login/login.component";

const app_routes: Routes =[
	{path: 'home', component : HomeComponent},
	{path: 'customers', component : CustomersComponent},
	{path: 'lineitems', component : LineitemsComponent},
	{path: 'orders', component : OrdersComponent},
	{path: 'products', component : ProductsComponent},
	{path: 'registers', component : RegistersComponent},
	{path: 'login', component : LoginComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
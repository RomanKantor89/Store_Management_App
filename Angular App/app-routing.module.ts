import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { ServiceAddComponent } from './components/service-add/service-add.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GuardAuthService } from './dataServices/guard-auth.service';
import { CartComponent } from './components/cart/cart.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PrepaidCardComponent } from './components/prepaid-card/prepaid-card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'service/update', component: UpdateServiceComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service/add', component: ServiceAddComponent, canActivate: [GuardAuthService]},
  { path: 'service/update', component: UpdateServiceComponent},
  { path: 'cart', component: CartComponent, canActivate: [GuardAuthService]},
  { path: 'prepaid-card', component: PrepaidCardComponent, canActivate: [GuardAuthService]},
  { path: 'account', component: AccountComponent, canActivate: [GuardAuthService] },
  { path: 'customers', component: CustomersComponent},
  { path: 'customers/order', component: OrdersComponent},
  { path: "checkout", component: CheckoutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

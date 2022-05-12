import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';

import { DisplayproductsComponent } from './displayproducts/displayproducts.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent} ,

  { path: 'login', component:LoginComponent},
  { path: 'list-users', component: ListUsersComponent, canActivate: [AuthGuard,RoleGuard] } ,
  
  { path:'register', component: RegisterComponent} ,
  {path:'listproducts',component: ListproductsComponent} ,
  {path:'addproducts',component: AddproductsComponent } ,
  {path: 'updateproducts/:id',component: UpdateproductsComponent},
  {path:'home',component: HomeComponent},
  {path:'adduser', component: AdduserComponent},
  {path:'displayproducts',component: DisplayproductsComponent},
  {path:'addtocart', component: AddtocartComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

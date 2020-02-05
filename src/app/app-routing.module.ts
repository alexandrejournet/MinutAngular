import { PredefinedComponent } from './page/core/predefined/predefined.component';
import { CreateComponent } from './page/core/create/create.component';
import { RegisterComponent } from './page/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: 'predefine', component: PredefinedComponent, canActivate: [AuthGuard]},
  { path: 'mine', component: CreateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

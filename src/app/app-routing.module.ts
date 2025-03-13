import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'binding',component:BindingComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'calculator',component:CalculatorComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'rectangle',component:RectangleComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'circle',component:CircleComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'bmi',component:BmiComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'emical',component:EmicalculatorComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'directives',component:DirectivesComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'employees',component:EmployeesComponent}
  ]},

  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path:'**',component:Error404Component}, //Wild-card routing
  
  {path: 'binding', component:BindingComponent},
  {path: 'calculator', component:CalculatorComponent},
  {path: 'rectangle', component:RectangleComponent},
  {path: 'circle', component:CircleComponent},
  {path: 'bmi', component:BmiComponent},
  {path:'emical',component:EmicalculatorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

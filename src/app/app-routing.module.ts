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
import { EmployeeFlipkartComponent } from './employee-flipkart/employee-flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EmailComponent } from './email/email.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

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

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'employees flipkart',component:EmployeeFlipkartComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'vehicle',component:VehicleComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'email',component:EmailComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'flipkart',component:FlipkartComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'weather',component:WeatherComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'accounts',component:AccountsComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'create-vehicle',component:CreateVehicleComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'create-account',component:CreateAccountComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'students',component:StudentsComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'create-user',component:CreateUserComponent},
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeFlipkartComponent } from './employee-flipkart/employee-flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './email/email.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    WelcomeComponent,
    HomeComponent,
    BindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    EmicalculatorComponent,
    DirectivesComponent,
    EmployeesComponent,
    EmployeeFlipkartComponent,
    VehicleComponent,
    EmailComponent,
    FlipkartComponent,
    WeatherComponent,
    AccountsComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentsComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    CreateStudentComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CapitalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

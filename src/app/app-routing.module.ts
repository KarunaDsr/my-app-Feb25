import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { AuthenticationGuard } from './authentication.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'welcome', component: WelcomeComponent },

      { path: 'home', component: HomeComponent },

      { path: 'sibling', component: Sibling1Component },
      { path: 'parent', component: ParentComponent },


      { path: 'binding', component: BindingComponent },

      { path: 'calculator', component: CalculatorComponent },

      { path: 'rectangle', component: RectangleComponent },

      { path: 'circle', component: CircleComponent },

      { path: 'bmi', component: BmiComponent },

      { path: 'emical', component: EmicalculatorComponent },

      { path: 'directives', component: DirectivesComponent },

      { path: 'employees', component: EmployeesComponent },

      { path: 'employees flipkart', component: EmployeeFlipkartComponent },

      { path: 'vehicle', component: VehicleComponent },

      { path: 'email', component: EmailComponent },

      { path: 'flipkart', component: FlipkartComponent },

      { path: 'weather', component: WeatherComponent },

      { path: 'accounts', component: AccountsComponent },

      { path: 'create-vehicle', component: CreateVehicleComponent },

      { path: 'create-account', component: CreateAccountComponent },

      { path: 'students', component: StudentsComponent },

      { path: 'create-user', component: CreateUserComponent },

      { path: 'life-cycle-hooks', component: LifeCycleHooksComponent },

      { path: 'vehicle-details/:id', component: VehicleDetailsComponent },
      { path: 'edit-vehicle/:id', component: CreateVehicleComponent },
       {path: 'student-details/:id', component:StudentDetailsComponent},
       { path: 'create-student', component:CreateStudentComponent },
       {
        path:'payments',
        loadChildren:()=>import('./payments/payments.module').then(m => m.PaymentsModule)
       }
    ],
  },

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Error404Component }, //Wild-card routing

  { path: 'binding', component: BindingComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'rectangle', component: RectangleComponent },
  { path: 'circle', component: CircleComponent },
  { path: 'bmi', component: BmiComponent },
  { path: 'emical', component: EmicalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

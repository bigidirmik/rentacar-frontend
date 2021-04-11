import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrowserModule } from '@angular/platform-browser'
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},

  // filters
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/car/:carId", component:CarComponent},
  {path:"cars/category/:categoryId", component:CarComponent},

  //car-dto
  {path:"carDetails/:carId", component:CarDtoComponent},
  {path:"cars/category/:categoryId/carDetails/:carId", component:CarDtoComponent},
  {path:"cars/brand/:brandId/carDetails/:carId", component:CarDtoComponent},
  {path:"cars/color/:colorId/carDetails/:carId", component:CarDtoComponent},

  //rental
  {path:"carDetails/:carId/rental/:carId", component:RentalComponent}, // Filtresiz seçilen detay butonu (altındakiler ise filtre sonrası seçilendir)
  {path:"cars/category/:categoryId/carDetails/:carId/rental/:carId", component:RentalComponent},
  {path:"cars/brand/:brandId/carDetails/:carId/rental/:carId", component:RentalComponent},
  {path:"cars/color/:colorId/carDetails/:carId/rental/:carId", component:RentalComponent},

  //rental-add
  {path:"carDetails/:carId/rentalAdd/:carId", component:RentalAddComponent},

  //payment
  {path:"payment/:carId", component:PaymentComponent},

  //add
  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"brands/add", component:BrandAddComponent, canActivate:[LoginGuard]},
  {path:"colors/add", component:ColorAddComponent, canActivate:[LoginGuard]},

  //login-register
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"login/register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
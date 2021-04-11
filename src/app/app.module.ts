import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { CategoryComponent } from './components/category/category.component';
import { CarComponent } from './components/car/car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';

import { VatAddedPipe } from './pipes/vat-added.pipe';
import { MonthlyPipe } from './pipes/monthly.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';

import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,

    BrandComponent,
    CarImageComponent,
    CategoryComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CarComponent,
    PaymentComponent,
    RentalAddComponent,
    CarDtoComponent,

    VatAddedPipe,
    FilterPipePipe,
    MonthlyPipe,
    
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,

    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

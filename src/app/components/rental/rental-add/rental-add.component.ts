import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/car-dto';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rental-dto';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: '/rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  dataLoaded = false;

  rentals: Rental[] = [];
  rentalDetails: RentalDto[] = [];
  carDetails: CarDto[];

  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  rentDateNew: Date;
  returnDateNew: Date;
  dailyPrice: number;

  carToBeRented: Rental;
  rentable: boolean = false;
  imageBasePath = 'https://localhost:44366';

  constructor(
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private routerService: Router,
    private carDtoService: CarDtoService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getRentalsByCar(params['carId']);
        this.carId = params['carId'];
        this.getCarDetailsById(params['carId']);
        this.onSubmit();
        console.log(this.rentals[0])
      } else {
        this.getRentalDetails();
        this.onSubmit();
      }
    });
  }
  getRentalDetails() {
    this.rentalService.getRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getRentalsByCar(carId: number) {
    this.rentalService.getRentalsByCar(carId).subscribe((response) => {
      this.rentals = response.data;
      this.rentDateNew = this.rentals[0].rentDate;
      this.returnDateNew = this.rentals[0].returnDate;
      this.dataLoaded = true;
    });
  }

  getCarDetailsById(carId: number) {
    this.carDtoService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dailyPrice = response.data[0].dailyPrice;
    });
  }
  onSubmit() {
    console.log(this.rentDateNew);
    console.log(this.returnDateNew);
    if ((<any>this.rentDate).format() < (<any>this.returnDate).format()) {
      if (
        ((<any>this.rentDate).format() < this.rentDateNew &&
          this.rentDateNew < (<any>this.returnDate).format()) ||
        ((<any>this.rentDate).format() < this.returnDateNew &&
          this.returnDateNew < (<any>this.returnDate).format()) ||
        ((<any>this.rentDate).format() > this.rentDateNew &&
          this.returnDateNew > (<any>this.returnDate).format())
      ) {
        this.toastrService.error(
          'Bu tarih aralığında mevcut bir rezervasyon var!'
        );
      } else {
        console.log(
          (<any>this.returnDate - <any>this.rentDate) / (3600 * 24 * 1000)
        );
        this.carToBeRented = {
          carId: this.carId,
          rentDate: (<any>this.rentDate).format(),
          returnDate: (<any>this.returnDate).format(),
          customerId: this.customerId,
        };
        this.paymentService.setRental(
          this.carToBeRented,
          ((<any>this.returnDate - <any>this.rentDate) / (3600 * 24 * 1000)) *
            this.dailyPrice
        );
        this.toastrService.info('Ödeme noktasına yönlendiriliyorsunuz...');
        this.rentable = true;
        this.routerService.navigate(['/payment/' + this.carId]);
      }
    } else {
      this.toastrService.error('Bu tarih aralığında araç kiralayamazsınız!');
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { RentalDto } from '../models/rental-dto';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44366/api/';

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalById(rentalId:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getrentalbyid?rentalId=' + rentalId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsByCar(carId:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getrentalsbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalDetails(): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }

  getRentalDetailsByCar(carId:number): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetailsbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }

  AddRental(rental:Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}

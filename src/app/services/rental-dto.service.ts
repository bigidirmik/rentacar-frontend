import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDto } from '../models/rental-dto';

@Injectable({
  providedIn: 'root'
})
export class RentalDtoService {
  apiUrl = 'https://localhost:44366/api/';

  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }

  getRentalDetailsById(rentalId:number): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetailsbyid?rentalId=' + rentalId;
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }

  getRentalDetailsByCar(carId:number): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetailsbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }

  getRentalDetailsByCustomer(customerId:number): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetailsbycustomer?customerId=' + customerId;
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }
}

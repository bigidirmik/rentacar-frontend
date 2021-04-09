import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/car-dto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDtoService {
  apiUrl = 'https://localhost:44366/api/';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDetailsByColor(colorId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDetailsByCategory(categoryId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}

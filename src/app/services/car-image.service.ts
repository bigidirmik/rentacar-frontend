import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car-image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44366/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagesByCar(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}

import { Injectable } from '@angular/core';
import { CarService } from './car.service';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class FindexService {

  constructor(private customerService:CustomerService, private carService:CarService) { }

  async checkFindexEnough(customerId:number,carId:number):Promise<Boolean>{
    let customer = ( await this.customerService.getCustomerById(customerId).toPromise()).data
    let car = (await this.carService.getCarById(carId).toPromise()).data
    if(customer.findexScore >= car.findexScore){
      return true
    }
    return false
  }
}

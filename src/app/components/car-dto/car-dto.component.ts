import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/car-dto';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  constructor(private carDtoService:CarDtoService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  carDetails : CarDto[]=[];
  dataLoaded = false;
  imageBasePath="https://localhost:44366";
  imagePath = "";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsById(params["carId"])
    }})
  }

  getCarDetailsById(carId:number){
    this.carDtoService.getCarDetailsById(carId).subscribe((response)=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
      console.log(this.carDetails)
    })
  }

  getCarDetails(){
    this.carDtoService.getCarDetails().subscribe((response)=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }

  routingAddRental(carDetail:CarDto){
    this.toastrService.info("Kiralama sayfasına yönlendiriliyor...",carDetail.brandName)
  }

}

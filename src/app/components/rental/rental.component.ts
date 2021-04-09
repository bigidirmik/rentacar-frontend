import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  dataLoaded=false;
  constructor(private rentalService:RentalService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["rentalCarId"]){
        this.getRentalById(params["rentalCarId"])
      }
      else{
        this.getRentals()
      }
    })
  }
  getRentals(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    })
  }
  getRentalById(rentcarid:number){
    this.rentalService.getRentalById(rentcarid).subscribe((response)=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    })
  }

}
import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDto } from '../models/car-dto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    filterText = filterText? filterText.toLocaleLowerCase() : "";
    
    return filterText?
    value.filter( (c:CarDto)=>
      c.categoryName.toLocaleLowerCase().indexOf(filterText) !==-1 ||
      c.description.toLocaleLowerCase().indexOf(filterText) !==-1 ||
      c.colorName.toLocaleLowerCase().indexOf(filterText) !==-1 ||
      c.modelYear.toString().indexOf(filterText) !==-1
    )
    : value ;
  }

}

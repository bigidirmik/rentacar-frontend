import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthly'
})
export class MonthlyPipe implements PipeTransform {

  transform(value: number): number {
    return value*30;
  }

}

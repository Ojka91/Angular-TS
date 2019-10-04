import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class TestPipe implements PipeTransform {

  transform(value: any, show: any): any {
    return value.slice(0, +show);
  }

}

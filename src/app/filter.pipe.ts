import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false, // pipe recalculates every time the data changes - performance issues
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: any): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArr = [];

    for (const item of value) {
      if (item.status === filterString) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }
}

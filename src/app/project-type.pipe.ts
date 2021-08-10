import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectType',
  pure: false,
})
export class ProjectTypePipe implements PipeTransform {

  transform(array: any, filterType: string) {
    if(filterType === '')
      return array;
      return array.filter(item => item.type == filterType);
  }

}

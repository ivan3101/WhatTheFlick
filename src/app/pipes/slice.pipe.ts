import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(text: any, length = 10): any {
    if (text.length > length) {
      return text.substr(0, length) + '...';
    }
    return text;
  }

}

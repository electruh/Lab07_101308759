import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDashes',
  standalone: true
})
export class RemoveDashesPipe implements PipeTransform {

  transform(value: string): string {
    // Replace dashes with empty spaces
    return value.replace(/-/g, ' ');
  }

}

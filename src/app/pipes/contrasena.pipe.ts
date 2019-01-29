import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, up: boolean): any {
    let ter = value.split("");
    if (up) {
      for (const key in ter) {
        ter[key] = "*"
      }
      return ter.join("");
    } else {
      return value;
    }
  }

}

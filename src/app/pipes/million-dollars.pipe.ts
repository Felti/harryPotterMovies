import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollars',
  standalone: true
})
export class MillionDollarsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value && value.trim()) {
      return `$${value} million`
    } else {
      return console.error("Error hundling the parsing of the string")
    }
  }

}

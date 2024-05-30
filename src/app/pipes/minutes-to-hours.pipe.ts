import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
  standalone: true
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const parsedMinutes = Number(value);
    if (value && !isNaN(parsedMinutes)) {
      const hours = `${Math.floor(parsedMinutes / 60)}h`;
      const minutes = `${Math.floor(parsedMinutes % 60)}min`;
      return `${hours ? hours : ''} ${minutes ? minutes : ''}`
    } else {
      return console.error("Error hundling the parsing of the date")
    }

  }

}

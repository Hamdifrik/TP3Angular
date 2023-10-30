import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nompersoSkipTests'
})
export class NompersoSkipTestsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe',
})
export class MeuPipePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

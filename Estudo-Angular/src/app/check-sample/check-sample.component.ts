import {
  Component,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css',
})
export class CheckSampleComponent
  implements
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;

  add() {
    this.quantidade++;
  }

  diminuir() {
    this.quantidade--;
  }

  ngOnDestroy(): void {
    console.log('goodbye');
  }
  ngDoCheck(): void {
    console.log('a');
  }
  ngAfterContentChecked(): void {
    console.log('a');
  }
  ngAfterContentInit(): void {
    console.log('a');
  }
  ngAfterViewChecked(): void {
    console.log('a');
  }
  ngAfterViewInit(): void {
    console.log('a');
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, CheckSampleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Estudo-Angular';
  isAliveCheckSample: boolean = true;

  disponseCheckSample(): void {
    if (this.isAliveCheckSample) {
      this.isAliveCheckSample = false;
    } else {
      this.isAliveCheckSample = true;
    }
  }
}

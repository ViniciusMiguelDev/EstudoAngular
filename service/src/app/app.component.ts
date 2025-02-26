import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, FormsModule],
  template: `
    <router-outlet />
    <app-card></app-card>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'service';
}

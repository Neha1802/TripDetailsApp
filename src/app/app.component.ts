import { Component } from '@angular/core';
import { TripInputComponent } from './components/trip-input/trip-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripInputComponent],
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'journey-app';

}
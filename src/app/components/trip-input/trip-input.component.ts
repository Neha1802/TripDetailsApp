import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-trip-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-input.component.html',
  styleUrls: ['./trip-input.component.scss']
})
export class TripInputComponent {
  
  trips: Trip[] = [];
  newTrip: Trip = { start: '', end: '' };

  ngOnInit(): void {}

  addTrip(): void {
    if (this.newTrip.start && this.newTrip.end) {
      this.trips.push({ ...this.newTrip });
      this.newTrip = { start: '', end: '' };
    }
  }

  getFirstThreeChars(str: string): string {
    return str.substring(0, 3).toUpperCase();
  }

  isContinuedTrip(index: number): boolean {
    console.log("index", index);
    if (index > 0) {
      return this.trips[index].start.toUpperCase() === this.trips[index - 1].end.toUpperCase();
    }
    return false;
  }

  isSameLocationTrip(index: number): boolean {
    if (index > 0) {
      return (
        this.trips[index].start.toUpperCase() === this.trips[index - 1].start.toUpperCase() &&
        this.trips[index].end.toUpperCase() === this.trips[index - 1].end.toUpperCase()
      );
    }
    return false;
  }

  getTripPosition(index: number): string {
    console.log(this.trips);
    if (this.isSameLocationTrip(index)) {
      return 'level-2';
    } else {
      return 'level-1';
    }
  }

  shouldShowArrow(index: number): boolean {
    if (index > 0 && !this.isContinuedTrip(index) && !this.isSameLocationTrip(index)) {
      return true;
    }
    return false;
  }

  afterLevel2(index: number): boolean {
    if (index > 0 && this.isContinuedTrip(index) && !this.isSameLocationTrip(index)) {
      return true;
    }
    return false;
  }
}
import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  agenda: Person[] = [];

  createNewPerson(person): void {
    this.agenda.push(person);
  }
}

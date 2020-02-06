import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-new-person-form',
  templateUrl: './new-person-form.component.html',
  styleUrls: ['./new-person-form.component.scss']
})
export class NewPersonFormComponent implements OnInit {
  @Output() createNewPerson: EventEmitter<Person> = new EventEmitter<Person>();
  submitted = false;

  newPersonForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/[a-z]/i)]],
    lastName: ['', [Validators.required, Validators.pattern(/[a-z]/i)]],
    age: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]
  }
  );

  get firstName() { return this.newPersonForm.get('firstName'); }
  get lastName() { return this.newPersonForm.get('lastName'); }
  get age() { return this.newPersonForm.get('age'); }
  get email() { return this.newPersonForm.get('email'); }
  get phone() { return this.newPersonForm.get('phone'); }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit(): void {
    this.submitted = true;

    if (this.newPersonForm.valid) {
      this.createNewPerson.emit(this.newPersonForm.value);
      this.newPersonForm.reset();
      this.submitted = false;
    }
  }
}

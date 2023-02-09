import { Component, Output, EventEmitter } from '@angular/core';
import { Driver } from 'types';
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
  faEdit,
  faTrash,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'CreateDriver',
  templateUrl: './create-driver.component.html',
  styleUrls: [
    './create-driver.component.scss',
    '../driver-item/driver-item.component.scss',
  ],
})
export class CreateDriverComponent {
  editMode = false;
  userIcon = faUser;
  emailIcon = faEnvelope;
  phoneIcon = faPhoneAlt;
  editIcon = faEdit;
  deleteIcon = faTrash;
  saveIcon = faSave;
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  @Output() listUpdateEvent = new EventEmitter<Driver[]>();

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  async handleSaveData(event: Event) {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber } = this;
    if ([firstName, lastName, email, phoneNumber].includes('')) {
      alert('Please fill all form fields in order to create a new driver!');
      return;
    }
    try {
      console.log('In try');
      const res = await fetch(`https://localhost:7178/Driver`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FirstName: this.firstName,
          LastName: this.lastName,
          Email: this.email,
          PhoneNumber: this.phoneNumber,
        }),
      });
      if (res.status >= 400) {
        alert(await res.text());
        return;
      }
      this.listUpdateEvent.emit(await res.json());
    } catch (error) {
      alert(error);
    }
  }
}

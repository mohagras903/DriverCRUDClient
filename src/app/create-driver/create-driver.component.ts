import { Component, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
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

//TODO: render this component conditionally as a popup based on a "Create" button click
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
    //TODO: add strict validation to submission results (e.g. phoneNumber)
    try {
      const res = await fetch(environment.apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
        }),
      });
      if (res.status >= 400) {
        alert(await res.text());
        return;
      }
      const result = await res.json();
      this.listUpdateEvent.emit(result);
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.phoneNumber = '';
    } catch (error) {
      alert(error);
    }
  }
}

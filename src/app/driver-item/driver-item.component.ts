import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  selector: 'DriverItem',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.scss'],
})
export class DriverItemComponent {
  editMode = false;
  userIcon = faUser;
  emailIcon = faEnvelope;
  phoneIcon = faPhoneAlt;
  editIcon = faEdit;
  deleteIcon = faTrash;
  saveIcon = faSave;
  TestName = '';
  @Input() driver: Driver = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    id: '',
  };
  @Input() index = 0;

  @Output() listUpdateEvent = new EventEmitter<Driver[]>();

  toggleEditMode() {
    console.log(this.driver);

    this.editMode = !this.editMode;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  async handleDeleteItem() {
    try {
      const res = await fetch(`${environment.apiURL}/${this.driver.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status >= 400) {
        alert(await res.text());
        return;
      }
      const result = await res.json();
      console.log(result);
      this.listUpdateEvent.emit(result);
    } catch (error) {
      alert(error);
    }
  }

  async handleSaveUpdatedData(event: Event) {
    event.preventDefault();
    console.log(this.driver);
    const { firstName, lastName, email, phoneNumber, id } = this.driver;

    try {
      const res = await fetch(environment.apiURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
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
      this.editMode = false;
    } catch (error) {
      alert(error);
    }
  }
}

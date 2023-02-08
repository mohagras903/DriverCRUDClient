import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
export class DriverItemComponent implements OnInit {
  editMode = false;
  userIcon = faUser;
  emailIcon = faEnvelope;
  phoneIcon = faPhoneAlt;
  editIcon = faEdit;
  deleteIcon = faTrash;
  saveIcon = faSave;
  @Input() driver: Driver = {
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Id: '',
  };
  @Input() index = 0;

  @Output() listUpdateEvent = new EventEmitter<Driver[]>();
  ngOnInit() {
    console.log(this.driver);
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  async handleDeleteItem() {
    try {
      const res = await fetch(
        `https://localhost:7178/Driver/${this.driver.Id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (res.status >= 400) {
        alert(await res.text());
        return;
      }
      //this.drivers = await res.json();
      this.listUpdateEvent.emit(await res.json());
    } catch (error) {
      alert(error);
    }
  }
}

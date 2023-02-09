import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
export class DriverItemComponent implements OnInit, OnChanges {
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

  ngOnInit() {
    //console.log(this.driver);
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*
    console.log(this.driver);
    console.log(changes);
    */
  }
  toggleEditMode() {
    console.log(this.driver);

    this.editMode = !this.editMode;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  async handleDeleteItem() {
    try {
      const res = await fetch(
        `https://localhost:7178/Driver/${this.driver.id}`,
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
      const result = await res.json();
      console.log(result);
      this.listUpdateEvent.emit(result);
    } catch (error) {
      alert(error);
    }
  }
}

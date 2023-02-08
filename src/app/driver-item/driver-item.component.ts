import { Component } from '@angular/core';
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
  faEdit,
  faTrash,
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
  driver = null;
}

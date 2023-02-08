import { Component, OnInit } from '@angular/core';
import { Driver } from 'types';
@Component({
  selector: 'DriversList',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss'],
})
export class DriversListComponent implements OnInit {
  drivers: Driver[] = [];

  async ngOnInit() {
    try {
      const res = await fetch('https://localhost:7178/Driver', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status >= 400) {
        alert(await res.text());
        return;
      }
      this.drivers = await res.json();
    } catch (error) {
      alert(error);
    }
  }

  receiveUpdatedList($event: Driver[]) {
    this.drivers = $event;
  }
}

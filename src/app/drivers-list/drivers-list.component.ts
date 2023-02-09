import { Component, OnInit } from '@angular/core';
import { Driver } from 'types';
import { environment } from '../../environments/environment';
@Component({
  selector: 'DriversList',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss'],
})
export class DriversListComponent implements OnInit {
  drivers: Driver[] = [];

  async ngOnInit() {
    try {
      const res = await fetch(environment.apiURL, {
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

  receiveUpdatedList(list: Driver[]) {
    console.log('Got it');
    this.drivers = list;
  }
}

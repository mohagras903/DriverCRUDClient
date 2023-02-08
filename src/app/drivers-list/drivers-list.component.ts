import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'DriversList',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss'],
})
export class DriversListComponent implements OnInit {
  drivers = [];

  async ngOnInit() {
    const res = await fetch('https://localhost:7178/Driver', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

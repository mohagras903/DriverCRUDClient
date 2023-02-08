import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { DriverItemComponent } from './driver-item/driver-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DriversListComponent,
    DriverItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

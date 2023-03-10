import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { DriverItemComponent } from './driver-item/driver-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateDriverComponent } from './create-driver/create-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DriversListComponent,
    DriverItemComponent,
    CreateDriverComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

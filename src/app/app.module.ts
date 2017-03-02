import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { MissionsTableComponent } from './missions-table/missions-table.component';
import { MissionRowComponent } from './mission-row/mission-row.component';
import { AppGoogleMapsService } from './google-maps-service'

@NgModule({
  declarations: [
    AppComponent,
    MissionsTableComponent,
    MissionRowComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AppGoogleMapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

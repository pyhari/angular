import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component'
import { ViewModule } from './view/view.module';
import {TestServiceService} from './test-service.service'
import { HttpClientModule } from '@angular/common/http';
import {HttpServiceService} from './http-service.service';
 
import {MatNativeDateModule} from '@angular/material';
 
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {InputOverviewComponent} from './input-overview/input-overview.component'
import {DemoMaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    InputOverviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [InputOverviewComponent],
  providers: [TestServiceService,AppComponent,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

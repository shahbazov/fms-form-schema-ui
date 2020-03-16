import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FmsAutoCompleteModule } from './fms-modules/material.module';
import { FmsPrimengModule } from './fms-modules/primeng.module';

import { FmsAutoCompleteComponent } from './fms-auto-complete/fms-auto-complete.component';
import { FmsFormSchemaComponent } from './fms-form-schema/fms-form-schema.component';
import { PrimngExampleComponent } from './primng-example/primng-example.component';
import { PlainExampleComponent } from './plain-example/plain-example.component';

import { FmsEventsComponent } from './fms-dev-events/fms-events.component';
import { FmsFunctionComponent } from './fms-dev-function/fms-function.component';
import { FmsDefActionComponent } from './fms-def-action/fms-def-action.component';

@NgModule({
  declarations: [
    AppComponent,
    FmsAutoCompleteComponent,
    FmsFormSchemaComponent,
    PrimngExampleComponent,
    PlainExampleComponent,
    FmsEventsComponent,
    FmsFunctionComponent,
    FmsDefActionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FmsAutoCompleteModule,
    FmsPrimengModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

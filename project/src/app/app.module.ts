import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    DropdownModule,
    SplitterModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

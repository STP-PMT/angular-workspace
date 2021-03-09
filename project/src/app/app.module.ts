import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

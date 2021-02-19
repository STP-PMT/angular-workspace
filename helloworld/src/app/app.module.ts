import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    TabMenuModule,
    CardModule,
    ButtonModule,
    PanelModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

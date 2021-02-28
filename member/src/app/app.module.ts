import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Member1Component } from './member1/member1.component';
import { Member2Component } from './member2/member2.component';
import { Member3Component } from './member3/member3.component';
import { Member4Component } from './member4/member4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Member1Component,
    Member2Component,
    Member3Component,
    Member4Component
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

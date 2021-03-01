import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import {CardModule} from 'primeng/card';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Member1Component } from './member1/member1.component';
import { Member2Component } from './member2/member2.component';
import { Member3Component } from './member3/member3.component';
import { Member4Component } from './member4/member4.component';
import { HomeComponent } from './home/home.component';

import {Routes,RouterModule} from "@angular/router";


const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Member1',component:Member1Component},
  {path:'Member2',component:Member2Component},
  {path:'Member3',component:Member3Component},
  {path:'Member4',component:Member4Component},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Member1Component,
    Member2Component,
    Member3Component,
    Member4Component,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToolbarModule,
    RouterModule,
    CardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

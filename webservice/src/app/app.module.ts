import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'member/:email', component: MemberComponent },
  { path: 'product/:code', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

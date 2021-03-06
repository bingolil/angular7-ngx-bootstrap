import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CurrentModule } from './current/current.module';
import { InterceptService } from './utils/service/intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CurrentModule,
    ModalModule.forRoot(),
    NgProgressModule,
    NgProgressRouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

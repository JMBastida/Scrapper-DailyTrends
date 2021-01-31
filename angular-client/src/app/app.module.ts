import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiModule, BASE_PATH } from './services/api';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalModule } from './shared/layout/modal/modal.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    ModalModule,
    SharedModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.apiUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}

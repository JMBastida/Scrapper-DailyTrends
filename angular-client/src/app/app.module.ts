import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedCardComponent } from './shared/feed-card/feed-card.component';
import { HomeComponent } from './home/home.component';
import { ApiModule, BASE_PATH } from './services/api';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, FeedCardComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ApiModule, HttpClientModule],
  providers: [{ provide: BASE_PATH, useValue: environment.apiUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedCardComponent } from './shared/feed-card/feed-card.component';
import { HomeComponent } from './home/home.component';
import { ApiModule } from './services/api';

@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

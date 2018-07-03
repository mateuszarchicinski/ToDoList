import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApiUrlToken } from './api/api';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppReduxModule } from './redux/app.redux';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppReduxModule,
  ],
  providers: [
    {
      provide: ApiUrlToken,
      useValue: 'https://todolist-9b7d9.firebaseio.com/',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

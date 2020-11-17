import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Rutas
import { APP_ROUTING } from "./app.routes";
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FlightCancellingModule } from './flight-cancelling/flight-cancelling.module';
import { APP_ROUTES } from './app.routes';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  imports: [
    // BrowserModule,
    FormsModule,
    HttpClientModule,
    
    // FlightCancellingModule,
    // FlightBookingModule, // Verweise auf lazy Module entfernen

    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
   
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

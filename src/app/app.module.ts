import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HeaderComponent } from './shared/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HotelComponent } from './hotel/hotel.component';
import { HttpClientModule } from '@angular/common/http';
import { KnobModule } from 'primeng/knob';
import { CarouselModule } from 'primeng/carousel';  // Import du module Carousel
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgScrollbarModule } from 'ngx-scrollbar';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'
import {MatDialogModule} from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
 
    HeaderComponent,
      HomeComponent,
      DestinationComponent,
      ContactComponent,
      
      FooterComponent,
      HotelComponent,
      ConfirmDialogComponent,
      
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule ,
    CarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    KnobModule,
    InputSwitchModule,
    NgScrollbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
   
    
    
  

 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

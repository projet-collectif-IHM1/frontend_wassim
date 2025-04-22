import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { ContactComponent } from './contact/contact.component';
import { HotelComponent } from './hotel/hotel.component';
import { PayeFormComponent } from './paye-form/paye-form.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ChambreFormComponent } from './chambre-form/chambre-form.component';
import { OfferComponent } from './offer/offer.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { UserComponent } from './user/user.component';
import { OptionComponent } from './option/option.component';
import { OptionFormComponent } from './option-form/option-form.component';


const routes: Routes = [
  {path:'Paye',
    pathMatch:'full',
    component:HomeComponent
  },
  {path:'Destination',
    pathMatch:'full',
    component:DestinationComponent
  },
  {
    path: 'User',
    pathMatch: 'full',
    component:UserComponent
  },
  {path:'Reservation',
    pathMatch:'full',
    component:ContactComponent
  },
  {path:'Hotel',
    pathMatch:'full',
    component:HotelComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component:PayeFormComponent
  },
  {
    path: 'Paye/edit/:id',
    pathMatch: 'full',
    component:PayeFormComponent
  },
  {
    path: 'createHotel',
    pathMatch: 'full',
    component:HotelFormComponent
  }
  ,{
    path: 'Hotel/edit/:id',
    pathMatch: 'full',
    component:HotelFormComponent
  },
  {
    path: 'Chambre',
    pathMatch: 'full',
    component:ChambreComponent
  },
  {
    path: 'createChambre',
    pathMatch: 'full',
    component:ChambreFormComponent
  },
  {
    path: 'Chambre/edit/:id',
    pathMatch: 'full',
    component:ChambreFormComponent
  },
  {
    path: 'Offer',
    pathMatch: 'full',
    component:OfferComponent
  },
  {
    path: 'createOffer',
    pathMatch: 'full',
    component:OfferFormComponent
  }
  ,
  {
    path: 'Offer/edit/:id',
    pathMatch: 'full',
    component:OfferFormComponent
  },
  {
    path: 'createReservation',
    pathMatch: 'full',
    component:ReservationFormComponent
  },
  {
    path: 'Reservation/edit/:id', 
    pathMatch: 'full',
    component:ReservationFormComponent
  },
  {
    path: 'Option',
    pathMatch: 'full',
    component:OptionComponent
  },
  {
    path: 'createOption',
    pathMatch: 'full',
    component:OptionFormComponent
  },
  {
    path: 'Option/edit/:id',
    pathMatch: 'full',
    component:OptionFormComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

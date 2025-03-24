import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { ContactComponent } from './contact/contact.component';
import { HotelComponent } from './hotel/hotel.component';


const routes: Routes = [
  {path:'Paye',
    pathMatch:'full',
    component:HomeComponent
  },
  {path:'Destination',
    pathMatch:'full',
    component:DestinationComponent
  },
  {path:'Reservation',
    pathMatch:'full',
    component:ContactComponent
  },
  {path:'Hotel',
    pathMatch:'full',
    component:HotelComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

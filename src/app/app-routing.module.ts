import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { ContactComponent } from './contact/contact.component';
import { HotelComponent } from './hotel/hotel.component';
import { PayeFormComponent } from './paye-form/paye-form.component';


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
  {
    path: 'create',
    pathMatch: 'full',
    component:PayeFormComponent
  },
  {
    path: 'Paye/edit/:id',
    pathMatch: 'full',
    component:PayeFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

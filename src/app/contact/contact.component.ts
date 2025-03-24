import { Component } from '@angular/core';
import { ReservationService } from '../Services/reservation.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  Resevation: any[] = [];
      isLoading: boolean = true;
    
      newpaye: any = {}; // Declare newHotel property
    
      constructor(
        
        private MS: ReservationService,      // Service for handling delete operation
        private dialog: MatDialog
      ) {}
    
      ngOnInit(): void {
        // Fetch hotels on component initialization
        this.MS.getAllReservation().subscribe(
          (data) => {
            console.log("Hôtels reçus :", data);
            this.Resevation = data;
            this.isLoading = false; // Stop loading when data is received
          },
          (error) => {
            console.error("Erreur lors de la récupération des hôtels :", error);
            this.isLoading = false; // Stop loading even on error
          }
        );
      }

}

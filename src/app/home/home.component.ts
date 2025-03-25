import { Component, OnInit } from '@angular/core';
import { PayeService } from '../Services/paye.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   paye: any[] = [];
    isLoading: boolean = true;
  
    newpaye: any = {}; // Declare newHotel property
  
    constructor(
      
      private MS: PayeService,      // Service for handling delete operation
      private dialog: MatDialog
    ) {}
  
    ngOnInit(): void {
  // Fetch data on component initialization
  this.loadPaye(); // Call a reusable function to fetch data
}

loadPaye(): void {
  this.isLoading = true; // Set loading to true before making the request
  this.MS.getAllPaye().subscribe(
    (data) => {
      console.log("Paye reçus :", data);
      this.paye = data.payes; // Ensure that 'paye' is correctly set
      this.isLoading = false; // Stop loading when data is received
    },
    (error) => {
      console.error("Erreur lors de la récupération des paye :", error);
      this.isLoading = false; // Stop loading even on error
    }
  );
}

delete(id: string): void {
  // Open the confirmation dialog
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '400px',
    width: '600px',
  });

  // After the dialog is closed, check if the user confirmed the action
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Proceed to delete if the user confirmed
      this.MS.deletePaye(id).subscribe(
        () => {
          console.log('Paye supprimé avec succès');
          // Reload the list of paye after deletion
          this.loadPaye(); // Reuse the method to refresh data
        },
        (error) => {
          console.error('Erreur lors de la suppression du paye :', error);
        }
      );
    }
  });
}


}

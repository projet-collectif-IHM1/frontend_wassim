import { Component, OnInit } from '@angular/core';
import { OfferService } from '../Services/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  
    offers: any[] = [];
    isLoading: boolean = true;
    errorMessage: string | null = null;

    constructor(
      private offerService: OfferService,
      private dialog: MatDialog
    ) {}
  
    ngOnInit(): void {
      this.loadOffers();
    }
  
    loadOffers(): void {
      this.isLoading = true;
      this.errorMessage = null;
      
      this.offerService.getAllOffer().subscribe({
        next: (response: any) => {
          console.log('API Response:', response);
          
          // Correction ici - utiliser response.offres au lieu de response.offers
          if (response && response.offres && Array.isArray(response.offres)) {
            this.offers = response.offres;
          } else {
            this.errorMessage = 'La structure des données reçues est inattendue';
            console.error(this.errorMessage, response);
          }
          
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors du chargement des offres';
          console.error(this.errorMessage, err);
          this.isLoading = false;
        }
      });
    }
  
    // offer.component.ts
deleteOffer(id: string): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '400px',
    data: {
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this offer?'
    }
  });

  dialogRef.afterClosed().subscribe(confirmed => {
    if (confirmed) {
      this.isLoading = true;
      this.offerService.deleateOffer(id).subscribe({
        next: () => {
          // Remove from local array
          this.offers = this.offers.filter(o => o.id !== id);
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Delete failed:', err);
          this.isLoading = false;
          
          if (err.status === 404) {
            alert('Offer not found. It may have already been deleted.');
          } else {
            alert('Error deleting offer. Please try again.');
          }
        }
      });
    }
  });
}
}
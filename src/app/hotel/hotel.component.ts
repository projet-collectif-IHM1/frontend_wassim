import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from '../Services/service-client.service';
import { HotelService } from '../Services/hotel.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: any[] = [];
  isLoading: boolean = true;

  newHotel: any = {}; // Declare newHotel property

  constructor(
    
    private hotelService: HotelService,      // Service for handling delete operation
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Fetch hotels on component initialization
    this.hotelService.GetAllHotel().subscribe(
      (data) => {
        console.log("Hôtels reçus :", data);
        this.hotels = data;
        this.isLoading = false; // Stop loading when data is received
      },
      (error) => {
        console.error("Erreur lors de la récupération des hôtels :", error);
        this.isLoading = false; // Stop loading even on error
      }
    );
  }
  loadHotels() {
    this.hotelService.GetAllHotel().subscribe(
      (data: any) => {
        console.log('Hotels data:', data); // Log the fetched hotels data
        this.hotels = data;
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );
  }
  

  delete(hotelId: string) {
    console.log('Deleting hotel with ID:', hotelId); // Log the hotelId
    if (!hotelId) {
      console.error('Hotel ID is undefined');
      return;
    }
    this.hotelService.deleteHotel(hotelId).subscribe(
      (response) => {
        console.log('Hotel deleted successfully', response);
        this.loadHotels(); // Reload the hotels list
      },
      (error) => {
        console.error('Error deleting hotel:', error);
      }
    );
  }
  
}

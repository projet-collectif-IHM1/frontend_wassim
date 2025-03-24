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
      // Fetch hotels on component initialization
      this.MS.getAllPaye().subscribe(
        (data) => {
          console.log("Hôtels reçus :", data);
          this.paye = data;
          this.isLoading = false; // Stop loading when data is received
        },
        (error) => {
          console.error("Erreur lors de la récupération des hôtels :", error);
          this.isLoading = false; // Stop loading even on error
        }
      );
    }
    delete(id:string){
      //lancer la boite de dialogue
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        height: '400px',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.MS.deletePaye(id).subscribe(()=>{
            this.MS.getAllPaye().subscribe((data)=>{
              this.paye = data;
            })
          })
        }
      });}

}

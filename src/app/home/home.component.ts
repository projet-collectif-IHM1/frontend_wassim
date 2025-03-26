// home.component.ts
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
  newPaye: any = {};

  constructor(
    private payeService: PayeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPaye();
  }

  loadPaye(): void {
    this.isLoading = true;
    this.payeService.getAllPaye().subscribe(
      (response) => {
        this.paye = response.payes; // Access the 'payes' array from response
        this.isLoading = false;
      },
      (error) => {
        console.error("Error loading payes:", error);
        this.isLoading = false;
      }
    );
  }

  delete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.payeService.deletePaye(id).subscribe(
          () => {
            this.loadPaye(); // Refresh the list
          },
          (error) => {
            console.error('Error deleting paye:', error);
          }
        );
      }
    });
  }
}
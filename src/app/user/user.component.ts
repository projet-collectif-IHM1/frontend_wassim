import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  isLoading: boolean = true;
  newUser: any = {};

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.users = response.users; // Access the 'users' array from response
        this.isLoading = false;
      },
      (error) => {
        console.error("Error loading users:", error);
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
        this.userService.deleateUser(id).subscribe(
          () => {
            this.loadUsers(); // Refresh the list
          },
          (error) => {
            console.error('Error deleting user:', error);
          }
        );
      }
    });
  }
}
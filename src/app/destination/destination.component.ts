import { Component, OnInit } from '@angular/core';
import { AvisService } from '../Services/avis.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  avisList: any[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;
  userMap: Map<string, string> = new Map();

  constructor(
    private avisService: AvisService,
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers().then(() => {
      this.loadAvis();
    });
  }

  loadUsers(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.userService.getAllUsers().subscribe({
        next: (response: any) => {
          // Handle different response formats
          const users = response?.data || response?.users || response;
          
          if (Array.isArray(users)) {
            users.forEach((user: any) => {
              this.userMap.set(user.id, user.name || user.username || user.email || `User ${user.id}`);
            });
          }
          resolve();
        },
        error: (err) => {
          console.error('Failed to load users', err);
          resolve();
        }
      });
    });
  }

  loadAvis(): void {
    this.isLoading = true;
    this.errorMessage = null;
    
    this.avisService.getAllAvis().subscribe({
      next: (response: any) => {
        const avisData = response?.data || response?.avis || response;
        
        if (Array.isArray(avisData)) {
          this.avisList = avisData.map((avis: any) => ({
            ...avis,
            userName: this.userMap.get(avis.user_id) || `User ${avis.user_id}`
          }));
        } else {
          this.errorMessage = 'No reviews found';
          console.warn('Unexpected response format:', response);
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load reviews. Please try again.';
        console.error('Error fetching reviews:', error);
        this.isLoading = false;
      }
    });
  }

  delete(avisId: string): void {
    if (!avisId) {
      console.error('Invalid review ID');
      return;
    }

    const confirmDelete = confirm('Are you sure you want to delete this review?');
    if (!confirmDelete) return;

    this.isLoading = true;
    this.avisService.deleteAvis(avisId).subscribe({
      next: () => {
        this.loadAvis();
      },
      error: (error) => {
        this.errorMessage = 'Failed to delete review';
        console.error('Delete error:', error);
        this.isLoading = false;
      }
    });
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
}
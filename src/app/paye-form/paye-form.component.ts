import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PayeService } from '../Services/paye.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paye-form',
  templateUrl: './paye-form.component.html',
  styleUrls: ['./paye-form.component.css']
})
export class PayeFormComponent implements OnInit {

  form!: FormGroup; // Define the form group
  constructor(
    private MS: PayeService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const idcourant = this.activatedRoute.snapshot.params['id'];
    console.log(idcourant);
    if (idcourant) {
      this.MS.getPayeById(idcourant).subscribe((data) => {
        console.log(data);
        this.form = new FormGroup({
          nompaye: new FormControl(data.paye.nompaye),
          imagepaye: new FormControl(data.paye.imagepaye),
        });
      });
    } else {
      this.form = new FormGroup({
        nompaye: new FormControl(null),
        imagepaye: new FormControl(null),
      });
    }
  }
  
  

  onsub(): void {
    const idcourant = this.activatedRoute.snapshot.params['id'];
    
    if (idcourant) {
      console.log("Updating record with ID:", idcourant);
      console.log("Form data:", this.form.value);
  
      this.MS.updatePaye(this.form.value, idcourant).subscribe(() => {
        // Redirect to home page after success
        this.router.navigate(['']);
      }, (error) => {
        console.error("Error updating paye:", error);
      });
    } else {
      console.log("Creating new record");
      console.log("Form data:", this.form.value);
  
      this.MS.addPaye(this.form.value).subscribe(() => {
        // Redirect to home page after success
        this.router.navigate(['']);
      }, (error) => {
        console.error("Error adding paye:", error);
      });
    }
  }
  
  
}

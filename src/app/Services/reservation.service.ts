import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  getAllReservation():Observable<any>{
    return this.http.get<void>("http://127.0.0.1:8000/reservations/")}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }
  getAllOffer():Observable<any>{
    return this.http.get<void>("http://127.0.0.1:8000/offres/")}
    getOfferById(id:string):Observable<any>{
      return  this.http.get<void>(`http://127.0.0.1:8000/offres/${id}`)}
      deleateOffer(id: string): Observable<any> {
        return this.http.delete(`http://127.0.0.1:8000/offres/${id}`)} 
        updateOffer(id:string,offer:any):Observable<any>{
          return this.http.put<void>(`http://127.0.0.1:8000/offres/${id}`,offer)}  
          createOffer(offer: any): Observable<any> {
            return this.http.post("http://127.0.0.1:8000/offres/", offer);}  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayeService {
  private apiUrl = 'http://127.0.0.1:8000/payes';

  constructor(private http:HttpClient) { }
  getAllPaye():Observable<any>{
    return this.http.get<void>("http://127.0.0.1:8000/payes/")}
  getPayeById(id:string):Observable<any>{
    return this.http.get<void>(`http://127.0.0.1:8000/payes/${id}`)}
    deletePaye(id: string): Observable<any> {
      const url = `${this.apiUrl}/${id}`; // URL for deleting a specific Paye
      return this.http.delete(url);
    }}

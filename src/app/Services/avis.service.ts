import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

 
   constructor(private http:HttpClient) { }
    getAllAvis():Observable<any>{
       return this.http.get<void>("http://127.0.0.1:8000/avis/")}
    getAvisById(id:string):Observable<any>{
      return this.http.get<void>(`http://127.0.0.1:8000/avis/${id}`)}
    deleteAvis(id: string): Observable<any> {
      return this.http.delete(`http://127.0.0.1:8000/avis/${id}`)}  

}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HaditServiceService {
  constructor(private http: HttpClient) 
  {

  }
  getCategories(): Observable<any>{
    var result = this.http.get(`${environment.apiURL}categories`);
    return result;
  }
  getHaditesByCategory(id: any): Observable<any>{
    var result = this.http.get(`${environment.apiURL}Hadites-by-category/${id}`);
    return result;
  }
  getAllHadites():Observable<any>{
    return this.http.get(`${environment.apiURL}hadits`);
  }
  searchHadites(search: any): Observable<any>{
    var result = this.http.get(`${environment.apiURL}search?s=${search}`);
    return result;
  }
  getCategoryById(id: any): Observable<any>{
    var result = this.http.get(`${environment.apiURL}Category-by-id/${id}`);
    return result;
  }
}

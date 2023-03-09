import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Staff, OneStaff } from './staff-search.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'http://localhost:3000/staff-names';
  private URL = "http://localhost:3000/ID/"
  constructor(private http: HttpClient) { }

  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl);
  }

  getOneStaff(number: string): Observable<OneStaff[]>{
    return this.http.get<OneStaff[]>(this.URL+number);
  }
}
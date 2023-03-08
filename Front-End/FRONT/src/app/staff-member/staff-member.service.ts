import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'http://localhost:3000/staff-form';

  constructor(private http: HttpClient) { }

  addStaff(staff: any) {
    return this.http.post(this.apiUrl, staff);
  }
}

import { StaffService } from './staff-search.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff-search.component.html',
  styleUrls: ['./staff-search.component.css']
})
export class StaffSearchComponent implements OnInit {
  
  staffSelected: string="H";
  cedula: number = 0;
  mostrarStaff = false;

  constructor(private staffService: StaffService) { }

  public staffList: any[] = []; // Variable local donde guardarás la información obtenida
  public oneStaff: any[] = []; // Variable local donde guardarás la información obtenida

  ngOnInit() {
    this.staffService.getStaff().subscribe(
      (staffData: any[]) => {
        this.staffList = staffData;
      },
      (error) => console.log(error)
    );
  }

  evaluate(){
    this.staffService.getOneStaff(this.staffSelected).subscribe(
      (oneStaffData: any[]) => {
        this.oneStaff = oneStaffData;
        this.mostrarStaff = true;
      },
      (error) => console.log(error)
    );
  }
}
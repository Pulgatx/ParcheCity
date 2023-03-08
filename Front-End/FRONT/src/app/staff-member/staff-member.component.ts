import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from './staff-member.service';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css']
})
export class StaffMemberComponent {
  staffForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private staffService: StaffService) {
    this.staffForm = this.formBuilder.group({
      numeroIdentidad: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      img: "nn",
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      grupoSanguineo: ['', Validators.required],
      nombreAcudiente: ['', Validators.required],
      contactoAcudiente: ['', Validators.required],
      area: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      created_at: [new Date().getDate],
    });
    
  }

  onSubmit(): void {
    const staff = this.staffForm.value;
    this.staffService.addStaff(staff).subscribe(
      () => {
        console.log('Staff member added successfully!');
      },
      (error) => {
        console.error('Error adding staff member:', error);
      }
    );

    console.log(staff);
  }
}

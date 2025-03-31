import { Component } from '@angular/core';
import { Patient } from './models/patient.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from './services/patient.service';
import { LoginService } from '../login/service/login.service';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {
patients: Patient[] = []; 
  displayPopup: boolean = false;
  filterName: string = '';
  filterDisease: string = '';

  // Formularios reactivos
  addPatientForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private patientService: PatientService,
    private authService: LoginService) {}

  ngOnInit() {

    this.addPatientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      documentNumber: ['', [Validators.required]],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      disease: ['', Validators.required]
    });

    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients(this.filterName, this.filterDisease).subscribe(patients => {
      this.patients = patients.result ?? [];
    });
  }

  onSubmit() {
    if (this.addPatientForm.valid) {
      console.log('Nuevo paciente:', this.addPatientForm.value);
      const patient = this.addPatientForm.value;
      patient.creationUser = this.authService.currentUserValue?.userID;
      patient.documentNumber = String(this.addPatientForm.get('documentNumber')?.value || '');

      this.patientService.addPatient(patient)
        .subscribe(resp => {
          if (resp.isSuccessful) {
            this.loadPatients();
          }
        });
      this.displayPopup = false; 
    }
  }

}

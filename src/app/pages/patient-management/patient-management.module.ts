import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientManagementRoutingModule } from './patient-management-routing.module';
import { ImportsModule } from '../../imports';
import { PatientService } from './services/patient.service';
import { PatientManagementComponent } from './patient-management.component';


@NgModule({
  declarations: [PatientManagementComponent],
  imports: [
    CommonModule,
    PatientManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImportsModule
  ],
  providers: [PatientService]
})
export class PatientManagementModule { }

import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ResolveRequestResultService } from "../../../utils/resolve-requestResult";
import { RequestResult } from "../../../models/service/requestResult";
import { AddPatientDto, Patient } from "../models/patient.model";

const apiUrl = 'https://localhost:7145/Api/Patient';

@Injectable({
    providedIn: 'root',
  })
export class PatientService  {
    private getPatientSubject: BehaviorSubject<Patient[] | null>;
    private addPatientSubject: BehaviorSubject<Patient | null>;

  constructor(
    private http: HttpClient,
    private readonly _resolveReqSvc: ResolveRequestResultService
  ) {
    this.getPatientSubject = new BehaviorSubject<Patient[] | null>(null);
    this.addPatientSubject = new BehaviorSubject<Patient | null>(null);
  }

  getPatients(name:string , disease:string ): Observable<RequestResult<Patient[]>> {
    let params = new HttpParams();
    params = params.set('name', name);
    params = params.set('disease', disease);

    return this.http.get<RequestResult<Patient[]>>(`${apiUrl}`, { params })
    .pipe(
        map((requestResult) => {
          this.getPatientSubject.next(requestResult.result);
          return requestResult;
        }),
        catchError(this._resolveReqSvc.handleError)
      );
  }

  addPatient(patient: AddPatientDto): Observable<RequestResult<Patient>> {
    return this.http.post<RequestResult<Patient>>(`${apiUrl}`, patient)
    .pipe(
        map((requestResult) => {
          this.addPatientSubject.next(requestResult.result);
          return requestResult;
        }),
        catchError(this._resolveReqSvc.handleError)
      );
  }

}
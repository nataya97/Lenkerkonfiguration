import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schaltung} from "../modules/schaltung";
import {Lenkertyp} from "../modules/lenkertyp";

@Injectable({
  providedIn: 'root'
})

export class SchaltungService {

  private schaltungUrl : string;

  constructor(private http: HttpClient) {
    this.schaltungUrl='https://www.maripavi.at/produkt';
  }

  public findAll(lenker: Lenkertyp): Observable<Schaltung[]> {
    return this.http.get<Schaltung[]>('https://www.maripavi.at/produkt/schaltung?lenkertyp=' + lenker);
  }

}

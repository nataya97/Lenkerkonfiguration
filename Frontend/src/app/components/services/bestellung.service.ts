import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Griff } from 'src/app/components/modules/griff';
import {Material} from "../modules/material";
import {Lenkertyp} from "../modules/lenkertyp";
import {Schaltung} from "../modules/schaltung";

@Injectable({
  providedIn: 'root'
})

export class BestellungService {

  private bestellungUrl : string;

  constructor(private http: HttpClient) {
    this.bestellungUrl='https://www.maripavi.at/bestellung?';
  }

  public findAll(griff: Griff, lenkertyp: Lenkertyp, material: Material, schaltung: Schaltung): Observable<Griff[]> {
    return this.http.get<Griff[]>(this.bestellungUrl + "griff=" + griff + "&" + lenkertyp + material + schaltung);
  }

}

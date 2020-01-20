import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Material} from "../modules/material";
import {Lenkertyp} from "../modules/lenkertyp";

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  private materialUrl : string;

  constructor(private http: HttpClient) {
    this.materialUrl='https://www.maripavi.at/produkt';
  }

  public findAll(lenkertyp: Lenkertyp): Observable<Material[]> {
    return this.http.get<Material[]>('https://www.maripavi.at/produkt/material?lenkertyp=' + lenkertyp);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Griff } from 'src/app/components/modules/griff';
import {Material} from "../modules/material";
import {Lenkertyp} from "../modules/lenkertyp";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://www.maripavi.at/produkt/griff',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'accept',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  private materialUrl : string;

  constructor(private http: HttpClient) {
    this.materialUrl='https://www.maripavi.at/produkt'; //?
  }

  public findAll(lenkertyp: Lenkertyp): Observable<Material[]> {
    return this.http.get<Material[]>('https://www.maripavi.at/produkt/material?lenkertyp=' + lenkertyp);
  }

  public save(material: Material):Observable<Griff> {
    return this.http.put<Griff>(this.materialUrl+'/add', material);
  }

}

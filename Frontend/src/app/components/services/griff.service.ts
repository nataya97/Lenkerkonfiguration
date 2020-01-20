import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Griff } from 'src/app/components/modules/griff';
import {Material} from "../modules/material";

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

export class GriffService {

  private griffUrl : string;

  constructor(private http: HttpClient) {
    this.griffUrl='https://www.maripavi.at/produkt'; //?
  }

  public findAll(material: Material): Observable<Griff[]> {
    return this.http.get<Griff[]>('https://www.maripavi.at/produkt/griff?material=' + material);
  }

  public save(griff: Griff):Observable<Griff> {
    return this.http.put<Griff>(this.griffUrl+'/add', griff);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Griff } from 'src/app/components/modules/griff';
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

export class LenkertypService {

  private lenkertypUrl : string;

  constructor(private http: HttpClient) {
    this.lenkertypUrl='https://www.maripavi.at/produkt';
  }

  public findAll(): Observable<Lenkertyp[]> {
    return this.http.get<Lenkertyp[]>(this.lenkertypUrl + '/lenkertyp');
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bestellung} from "../modules/bestellung";

@Injectable({
  providedIn: 'root'
})

export class BestellungService {

  private bestellungUrl: string;
  private proxyUrl: string; /*Dient dazu CORS-Errors abzufangen, da Plug-In nicht ausreichend*/

  constructor(private http: HttpClient) {
   this.proxyUrl="https://cors-anywhere.herokuapp.com/"
    this.bestellungUrl = 'https://www.maripavi.at/bestellung?';
  }

  public save(bestellung: Bestellung):Observable<Bestellung> {
    return this.http.post<Bestellung>(this.proxyUrl + this.bestellungUrl + "griff=" + bestellung.griff + "&lenkertyp=" + bestellung.lenkertyp
      + "&material=" + bestellung.material + "&schaltung=" + bestellung.schaltung, bestellung);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modules/user";

@Injectable({
  providedIn: 'root'
})

export class HomepageService {

  private homepageUrl: string;
  private proxyUrl: string; /*Dient dazu CORS-Errors abzufangen, da Plug-In nicht ausreichend*/

  constructor(private http: HttpClient) {
    this.proxyUrl="https://cors-anywhere.herokuapp.com/"
    this.homepageUrl = 'https://www.maripavi.at/api/users';
  }

  public findAll(user: User): Observable<User[]> {
    return this.http.get<User[]>(this.proxyUrl + this.homepageUrl + '/' + user);
  }

  public save(user: User):Observable<User> {
    return this.http.post<User>(this.proxyUrl + this.homepageUrl, user);
  }

}

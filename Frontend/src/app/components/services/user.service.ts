import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from 'src/app/components/modules/user';
import {Bestellung} from "../modules/bestellung";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl : string;
  private proxyUrl: string; /*Dient dazu CORS-Errors abzufangen, da Plug-In nicht ausreichend*/


  constructor(private http: HttpClient) {
    this.userUrl='https://www.maripavi.at/api/users';
    this.proxyUrl="https://cors-anywhere.herokuapp.com/"

  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public save(user: User):Observable<User> {
    return this.http.post<User>(this.proxyUrl + this.userUrl, user);  }

}

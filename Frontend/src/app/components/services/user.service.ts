import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from 'src/app/components/modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl : string;

  constructor(private http: HttpClient) {
    this.userUrl='http://localhost:9090/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl+ '/all');
  }

  public save(user: User):Observable<User> {
    return this.http.put<User>(this.userUrl+'/add', user);
  }

}

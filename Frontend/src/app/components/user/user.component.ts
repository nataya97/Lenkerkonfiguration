import { Component, OnInit } from '@angular/core';
import {User} from "../modules/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {
    this.user = new User();
    this.users = new Array<User>();
  }

  ngOnInit() {
   this.userService.findAll().subscribe(users =>
   users.forEach(entry => {
     this.users.push(entry)
   }))
  }

}

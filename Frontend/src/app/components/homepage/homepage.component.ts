import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../modules/user";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user: User;
  isValid: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['lenkerkonfiguration']);
  }

  onCreateNewAccount() {
    this.router.navigate(['newUser']);
  }

}

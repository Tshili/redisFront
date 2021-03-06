import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {current} from 'codelyzer/util/syntaxKind';
import {User} from '../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
    isConnected: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    console.log('this.currentUser');
    console.log(this.currentUser);
    if (this.currentUser !== null) {
        this.isConnected = true;
    } else {
        this.isConnected = false;
    }
  }



}

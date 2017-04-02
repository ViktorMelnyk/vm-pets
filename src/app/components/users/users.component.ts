import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: any;
  public newUser = '';

  constructor(private service: UsersService) {
    this.users = service.getUsers();
  }

  addUser() {
    this.service.addUser(this.newUser);
    this.newUser = '';
  }

  delete(user) {
    this. users = this.service.deleteUser(user)
  }

  ngOnInit() {
  }

}

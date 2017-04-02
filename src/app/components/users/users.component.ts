import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: any;

  constructor(private service: UsersService) {
    this.users = service.getUsers();
  }

  delete(user) {
    this.service.deleteUser(user)
  }

  ngOnInit() {
  }

}

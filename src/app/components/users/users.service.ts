import {Injectable} from '@angular/core';

@Injectable()
class UsersService {
  private users: any = [
    {
      id: 1,
      name: 'Dan',
      count: 5
    },
    {
      id: 2,
      name: 'Viktor',
      count: 5
    }
  ];

  public addUser(name) {
    this.users.push({name});
  }

  public deleteUser(user) {
    this.users = this.users.filter((u) => user.id !== u.id);
    return this.users;
  }
  public getUsers() {
    return this.users;
  }
}

export {UsersService}

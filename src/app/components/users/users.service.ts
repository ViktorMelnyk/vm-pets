import {Injectable} from '@angular/core';

@Injectable()
class UsersService {
  private users = [
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

  public deleteUser(user) {
    this.users.filter((u) => user.id !== u.id);
  }
  public getUsers() {
    return this.users;
  }
}

export {UsersService}

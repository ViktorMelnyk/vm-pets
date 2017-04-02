import {Injectable} from '@angular/core';

@Injectable()
class PetsService {
  private pets: any = [
    {
      userId: 1,
      id: 1,
      name: 'Dan',
      count: 5
    },
    {
      userId: 2,
      id: 2,
      name: 'Viktor',
      count: 5
    },
    {
      userId: 2,
      id: 3,
      name: 'DDD',
      count: 5
    },
    {
      userId: 2,
      id: 4,
      name: 'Dan',
      count: 5
    }
  ];

  public addPet(name: string) {
    this.pets.push({name});
  }

  public deletePet(id) {
    this.pets = this.pets.filter((pet) => pet.id !== id);
  }

  public getPets(userId) {
    return this.pets.filter(pet => pet.userId == userId);
  }

  public getUser(id) {
    return {id, name: 'Viktor'};
  }
}

export {PetsService}


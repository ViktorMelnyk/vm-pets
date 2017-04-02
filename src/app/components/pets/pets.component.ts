import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PetsService} from './pets.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  public pets: any;
  public user: any;
  public newPet = '';

  constructor(private service: PetsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  public addPet() {
    this.service.addPet(this.newPet);
    this.newPet = '';
  }

  public deletePet(pet) {
    this.service.deletePet(pet.id);
    this.pets =  this.service.getPets(this.user.id)
  }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.pets = this.service.getPets(+params['id']);
        this.user = this.service.getUser(+params['id'])
      });
  }

}

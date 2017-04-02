import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import {UsersComponent} from './components/users/users.component';
import {PetsComponent} from './components/pets/pets.component';
import {UsersService} from './components/users/users.service';
import {PetsService} from './components/pets/pets.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService, PetsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

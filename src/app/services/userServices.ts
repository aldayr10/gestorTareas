import { Injectable } from '@angular/core';
import { USERS } from '../assets/Users';
import { User } from '../models/user';

@Injectable({
  providedIn:'root'
})
export class UserService{

  users: User[] = USERS;

  register(user: User){
    user.idUser = Date.now();
    this.users.push(user);
  }
  getUsers(){
    return this.users;
  }
}

import { Injectable } from '@angular/core';
import { USERS } from '../assets/Users';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email:string,password:string){

    const user = USERS.find(
      u => u.email === email && u.password === password
    );

    if(user){
      console.log(user);
      
      localStorage.setItem('user',JSON.stringify(user));
      
      return true;
    }

    return false;

  }

}

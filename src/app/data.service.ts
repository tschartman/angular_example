import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { IUser } from './user';
import { NewUser } from './newUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

    getUsers() {
      return this.http.get<IUser[]>('https://reqres.in/api/users')
    }

    getUserById(id) {
      let url: string = 'https://reqres.in/api/users/' + id;
      return this.http.get<IUser>(url)
    }

    createNewUser(user: NewUser){
      return this.http.post<NewUser>('https://reqres.in/api/users' , user)
    }

   }

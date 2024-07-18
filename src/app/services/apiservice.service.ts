import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  url = 'http://localhost:3000/get';
  constructor(private http:HttpClient) { }

   getUsers(){
    return this.http.get(this.url)
  }

   postUsers(user: any){
    return this.http.post(this.url, user);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editUserData(id: number, newData: any){    
    return this.http.put(`${this.url}/${id}`, newData);
  }
}

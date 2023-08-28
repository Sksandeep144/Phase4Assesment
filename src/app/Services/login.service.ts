import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class admin{
  constructor( public id:number,public username:string,public password:string){}
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:3000/admin";


  constructor(private http:HttpClient) { }

public validateUser(username:string){
  return this.http.get<admin[]>(`${this.url}?username=${username}`);
}

public changePassword(id:number,password:string){
  return this.http.put(`${this.url}/${id}`,{password:password},{ headers: { 'Content-Type': 'application/json' } });
}
public getUsername()
  {
    return sessionStorage.getItem('username')
  }
}

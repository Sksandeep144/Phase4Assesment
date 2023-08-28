import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class employee{
  constructor(public id:number,public first_name:string,public last_name:string,public email:string) {
    
  }
}
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {


  url = "http://localhost:3000/employees";
  constructor( private http:HttpClient ) { }
  
  addEmployee(emp:employee){
    return this.http.post(`${this.url}`,emp,{ headers: { 'Content-Type': 'application/json' } });
  }

  viewEmployees(){
    return this.http.get<employee[]>(`${this.url}`);
  }

  viewEmployeeById(id:number){
    return this.http.get<employee>(`${this.url}/${id}`);
  }

  updateEmployee(emp:employee){
    return this.http.put(`${this.url}/${emp.id}`,emp,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
  deleteEmployee(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}

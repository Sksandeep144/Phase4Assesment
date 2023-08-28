import { Component,OnInit } from '@angular/core';
import { CrudServiceService, employee } from '../Services/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  message:string = "";
 ngOnInit(): void {
   
 }
 constructor (private service:CrudServiceService,private router:Router){}
 onSubmit(emp:any){
   this.service.addEmployee(emp).subscribe((resp)=>{
     this.message="Employee added successfully";
     setTimeout(()=>{
       this.router.navigate(['/employees']);
     },2000)
   },(err)=>{
     this.message="Employee not added";
   })
 }
}

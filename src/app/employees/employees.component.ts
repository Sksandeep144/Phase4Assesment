import { Component,OnInit } from '@angular/core';
import { CrudServiceService, employee } from '../Services/crud-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  emp:employee[] = [];
  constructor (private service:CrudServiceService) { }
  ngOnInit(): void {
    this.service.viewEmployees().subscribe((data:employee[])=>{
      this.emp=data;
    });
    
  }

}

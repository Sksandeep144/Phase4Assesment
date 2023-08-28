import { Component, OnInit } from '@angular/core';
import { CrudServiceService, employee } from '../Services/crud-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  message:string = "";
  emp:employee = new employee( 0, '', '', '');
  constructor(private service:CrudServiceService,private router:ActivatedRoute,private route:Router) { }
ngOnInit(): void {
  let eid: number = 0;
  const idParam = this.router.snapshot.paramMap.get('id');
  if (idParam) {
    eid = +idParam;
  }
  this.service.viewEmployeeById(eid).subscribe((data:employee)=>{
    this.emp=data;
  },(err)=>{
    console.log(err);
  })
}
deleteEmployee(id:number){
  this.service.deleteEmployee(id).subscribe((resp)=>{
    this.message="Employee deleted successfully";
    setTimeout(()=>{
      this.route.navigate(['/employees']);
    },2000)
  },(err)=>{
    console.log(err);
  })
}
}

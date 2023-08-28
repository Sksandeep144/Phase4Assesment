import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  message: string = "";
  ngOnInit(): void {
    
  }
  constructor( private service:LoginService, private router:Router ) { }
  onChangePassword(user:any){
    let username = this.service.getUsername() 
    if(username){
      this.service.validateUser(username).subscribe(
        (resp)=>{
          if(resp.length > 0){
            let obj = resp[0]
            if(obj.password === user.currentPassword){
              this.service.changePassword(obj.id,user.newPassword).subscribe(
                (resp)=>{
                  this.message="Password changed successfully";
                  setTimeout(()=>{
                    this.router.navigate(['/employees']);
                  },2000)
                }
              )
            }
            else{
              this.message="Invalid Credentials"
            }
          }
        }
      )
    }
  }
}

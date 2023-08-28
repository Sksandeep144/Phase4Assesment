import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'EmployeeManagement';
  message: string = "";
  isLoggedIn:boolean = false;
  constructor(private service:LoginService,private router:Router){}
  onLogin(user:any){
    this.service.validateUser(user.username).subscribe(
      (resp)=>{
        if(resp.length > 0){
          let obj = resp[0]
          if(obj.password === user.password){
            sessionStorage.setItem('username', user.username);
            this.isLoggedIn = true;
            this.router.navigate(['/employees']);
          }
          else{
            this.message="Invalid Password"
          }
        }
        else{
          this.message="Username Not Found"
        }
        
      }
    )
  }
  logout() {
    this.isLoggedIn = false;
  }

 
}

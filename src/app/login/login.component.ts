import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: String;
  password!: String;
  constructor(private http:HttpClient , private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    const userObj= {"email":this.email,"password":this.password} ;
    const url="http://localhost:8080/user/login"
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("successfully login");
    },(err)=>{
      console.log(err);
      this.toastr.error("Please re-enter your Details");
    });
 }
}
  
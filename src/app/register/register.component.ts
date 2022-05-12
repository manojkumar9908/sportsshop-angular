import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: String;
  email!: String;
  password!: String;
  mobile!: String;


  constructor(private http:HttpClient ,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  register(){  
    const userObj={"name":this.name,"email":this.email,"password":this.password,"mobile":this.mobile};
    const url="http://localhost:8080/user/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
     this.toastr.success("successfully Registered");
    },(err)=>{
      console.log(err);
      this.toastr.error(err.error.message);
    });
 }
}
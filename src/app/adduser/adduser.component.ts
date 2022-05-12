import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  name!: String;
  email!: String;
  password!: String;
  mobile!: String;


  constructor(private http:HttpClient , private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getAdduser();

  }
  products!:any;
  getAdduser()
  {
    const userObj={"name":this.name,"email":this.email,"password":this.password,"mobile":this.mobile};
    const url="http://localhost:8080/user/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("successfully added user");
    },(err)=>{
      console.log(err);
      this.toastr.error("Please re-enter your Details");
    });
 }
}

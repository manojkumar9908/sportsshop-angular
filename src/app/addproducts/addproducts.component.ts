import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  name!: String;
  brand!: String;
  category!: String;
  price!: String;
  images!: String;


  constructor(private http:HttpClient , private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getAddProducts();

  }
  products!:any;
  getAddProducts()
  {
    const userObj={"name":this.name,"brand":this.brand,"category":this.category,"price":this.price,"images":this.images};
    const url="http://localhost:8080/product/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("successfully addedproduct");
    },(err)=>{
      console.log(err);
      this.toastr.error("Please re-enter your Details");
    });
 }
}
   
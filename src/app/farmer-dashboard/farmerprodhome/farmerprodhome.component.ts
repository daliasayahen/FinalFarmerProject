import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/servics/product-service.service';
import { UsersService } from 'src/app/servics/users.service';
import { CreatproductfarmerComponent } from '../creatproductfarmer/creatproductfarmer.component';
import { UpdateFarmerProductComponent } from '../update-farmer-product/update-farmer-product.component';

@Component({
  selector: 'app-farmerprodhome',
  templateUrl: './farmerprodhome.component.html',
  styleUrls: ['./farmerprodhome.component.css']
})
export class FarmerprodhomeComponent implements OnInit {

  @Input() ProductID:number|undefined



  constructor(private router:Router,private toast:ToastrService,
    private spiner:NgxSpinnerService, private dialog:MatDialog,public productsservics:ProductServiceService) { }
  ngOnInit(): void {
    this.getall();
    
  }

  GetAllproducts(){
    this.router.navigate(['Farmerdashboard/Farmerprodhome'])
  }
  GetAllproductssoldout(){
    this.router.navigate(['Farmerdashboard/Productsoldouthome'])
  }
  addreviews(){

    this.router.navigate(['Farmerdashboard/Reviewform'])

  }
  logout(){
    localStorage.clear();

    this.router.navigate(['/Login'])

    
  }


  gohome(){
    this.router.navigate(['HomePage'])
  }

  // Updateproduct(){
  //   this.dialog.open(UpdateFarmerProductComponent);

  // }
  getall(){
    this.spiner.show();
    this.productsservics.getall().subscribe((res:any)=>{
      this.productsservics.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )

  }
  create(){
    
    this.dialog.open(CreatproductfarmerComponent);
  }
  //  delete (){
  //    this.dialog.open(CreatproductfarmerComponent);
  //  }
 

  UpdateProduct(){
    this.dialog.open(CreatproductfarmerComponent);
  }
 


 


}

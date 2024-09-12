import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../model/Productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseurl = 'http://localhost:3000/product';
  constructor(private http:HttpClient) { 
  
  }
  //CRUD operations
  GetAll(){
   return this.http.get<Products[]>(this.baseurl);
  }
  GetproductbyId(id:number){
    return this.http.get<Products[]>(this.baseurl+'/'+id);
   }
 
   CreateProduct(_data:Products){
 return this.http.post(this.baseurl,_data);
   }

   UpdateProduct(_data: Products){
    return this.http.put<Products[]>(this.baseurl+'/'+_data.id,_data);
   }
   RemoveProduct(id:number){
    return this.http.delete<Products[]>(this.baseurl+'/'+id);
   }
}

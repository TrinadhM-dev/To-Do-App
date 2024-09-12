import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Products } from '../../model/Productmodel';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AddprodutComponent } from '../addprodut/addprodut.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatPaginatorModule,MatSortModule,MatButtonModule,MatInputModule,CommonModule,MatDialogModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price','status','action'];
  dataSource!: MatTableDataSource<Products>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: ProductService , private dialog: MatDialog ){

  }
  ngOnInit(): void {
    this.LoadProducts();
  }

  productlist:Products []=[]

    LoadProducts(){
    //error handling
      this.service.GetAll().subscribe({
        next: (item) => {
          this.productlist = item;
          this.dataSource = new MatTableDataSource(this.productlist);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (error) => {
          console.error('Error occurred while fetching products:', error);
        }
      });
    }
    createProduct(){
      this.OpenPopup();
    }
    OpenPopup(){
      this.dialog.open(AddprodutComponent,{
        width:'40%', enterAnimationDuration:'1000ms',exitAnimationDuration:'1000ms',height:'50%'    })
        .afterClosed().subscribe(item=>{
          this.LoadProducts();
        })
    }


    EditProduct(){

    }


    DeleteProduct(){

    }
}

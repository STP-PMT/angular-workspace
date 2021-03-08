import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  code;
  product;
  pName;
  pLine;
  pDescription;
  pInstock;
  pPrice;
  constructor(private router: ActivatedRoute, private http: HttpClient) {
    this.code = router.snapshot.params['code'];
    console.log(this.code);
    this.http.get('http://202.28.34.250/webdev/product/' + this.code)
      .subscribe((data: any) => {
        console.log(data);
        this.product = data;
        this.pName = data.productName;
        this.pLine = data.productLine;
        this.pDescription = data.productDescription;
        this.pInstock = data.quantityInStock;
        this.pPrice = data.buyPrice;
      }, error => {

      });
  }

  ngOnInit(): void {
  }
  saveData() {
    let json = {
      productCode: this.code,
      productName: this.pName,
      productLine: this.pLine,
      productDescription: this.pDescription,
      quantityInStock: this.pInstock,
      buyPrice: this.pPrice

    };
    this.http.post("http://202.28.34.250/webdev/product/" + this.code, JSON.stringify(json))
      .subscribe((data: any) => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}

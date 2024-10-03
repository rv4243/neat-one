import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../pages/products/products.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    FormsModule,
    ProductsComponent,
    HttpClientModule
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  providers: [HttpClient]
})
export class ProductItemComponent {

  id: any;
  item: any;
  quantity: number = 1;

  constructor(public activatedRoute : ActivatedRoute,
            public httpClient: HttpClient
  ) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = data.get('id');
      if(this.id) {
        this.getData();
      }
    })
  }

  ngOnInit() {
  }

  getData() {
    let url = '/assets/data/products.json';
    this.httpClient.get(url).subscribe((data : any) => {
      if(data && data.items && data.items.length > 0) {
        this.item = data.items.filter((x: any) => {
          console.log([x.id, this.id]);
          return (x && x.id && String(x.id) === this.id) ? true : false;
        })[0];
      }
    });
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }


}

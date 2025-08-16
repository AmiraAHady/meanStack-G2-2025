import {
  CurrencyPipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  // component Directive
  selector: 'app-products',
  imports: [NgClass, NgStyle, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList!: any[];
  constructor(private prodServ: ProductService) {}
  ngOnInit(): void {
    this.prodServ.getAllProducts().subscribe({
      next: (data) => {
        this.productList = data;
      },
    });
  }
}

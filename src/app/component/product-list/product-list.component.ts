import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { fetchProductData } from '../../../FetchProductData'; 

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[] = []; 

    ngOnInit() {
        this.loadProducts();
    }

    async loadProducts() {
        this.products = await fetchProductData();
    }
}

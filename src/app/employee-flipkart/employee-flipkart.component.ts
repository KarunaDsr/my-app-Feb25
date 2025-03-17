import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-flipkart',
  templateUrl: './employee-flipkart.component.html',
  styleUrls: ['./employee-flipkart.component.css']
})
export class EmployeeFlipkartComponent {
  searchQuery: string = '';
    
    newProduct = {
      name: '',
      price: 0,
      rating: 0,
      freeDelivery: false
    };
  
    products = [
      { name: 'pen', price: 10, rating: 3, freeDelivery: true },
      { name: 'phone', price: 100, rating: 2, freeDelivery: false },
      { name: 'shirt', price: 400, rating: 4, freeDelivery: true },
      { name: 'cap', price: 200, rating: 5, freeDelivery: false },
      { name: 'mobile case', price: 300, rating: 2, freeDelivery: true },
      { name: 'remote', price: 400, rating: 2.5, freeDelivery: false }
    ];
  
    addProduct() {
      if (this.newProduct.name) {
        this.products.push({ ...this.newProduct });
        this.newProduct = { name: '', price: 0, rating: 0, freeDelivery: false };
      }
    }
  
    deleteProduct(index: number) {
      this.products.splice(index,1);
}
  }


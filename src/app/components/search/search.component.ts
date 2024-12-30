import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  products = [
    {
      id:1,
      title: 'iPhone 13 Pro Max',
      price: 999.99,
      discount: 0.1,
      stock:14,
      image: "images.jpeg"
    },
    {
      id:2,
      title: 'iPhone 14 Pro Max',
      price: 1099.99,
      discount: 0.05,
      stock:0,
      image: "images.jpeg"
    }
  ]
}

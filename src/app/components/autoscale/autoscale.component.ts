import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-autoscale',
  templateUrl: './autoscale.component.html',
  styleUrl: './autoscale.component.css'
})
export class AutoscaleComponent implements OnInit {

  products: Product[] | any = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Service Scheduler Order Booking',
      description: 'Product Description',
      image: 'bookorder1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Service Scheduler Create Invoice',
      description: 'Product Description',
      image: 'invoice1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Parts Diary Dash Board',
      description: 'Product Description',
      image: 'partsdashboard1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Parts Order Booking',
      description: 'Product Description',
      image: 'partsorderbooking1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Parts T-Card',
      description: 'Product Description',
      image: 'partstcard.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Sales Diary Dashboard',
      description: 'Product Description',
      image: 'salesdashboard1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Sales Diary T-card Board',
      description: 'Product Description',
      image: 'salesdiaryboard.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Sales Diary Listing',
      description: 'Product Description',
      image: 'salesdiarylist.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Service Scheduler Dashboard',
      description: 'Product Description',
      image: 'ssdashboard.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  ];


  constructor() { 
  }
  

  ngOnInit() {
  }

}

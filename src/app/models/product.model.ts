export class Product {
// {
//     id: '1000',
//     code: 'f230fh0g3',
//     name: 'Bamboo Watch',
//     description: 'Product Description',
//     image: 'bamboo-watch.jpg',
//     price: 65,
//     category: 'Accessories',
//     quantity: 24,
//     inventoryStatus: 'INSTOCK',
//     rating: 5
// },

id?: string; // Optional property
code?: string; // Optional property
name?: string; // Optional property
description?: string; // Optional property
image?: string; // Optional property
price?: number; // Use number for price
category?: string; // Optional property
quantity?: number; // Use number for quantity
inventoryStatus?: string; // Optional property
rating?: number; // Use number for rating

constructor(
    id?: string,
    code?: string,
    name?: string,
    description?: string,
    image?: string,
    price?: number,
    category?: string,
    quantity?: number,
    inventoryStatus?: string,
    rating?: number
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
    this.inventoryStatus = inventoryStatus;
    this.rating = rating;
  }

}

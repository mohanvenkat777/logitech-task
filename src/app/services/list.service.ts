import { Injectable } from '@angular/core';
import { ItemModel } from "src/app/models/item-model";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  allItems: Array<ItemModel> = [
    {
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores consequatur error, in iusto laboriosam laborum laudantium molestiae natus obcaecati porro praesentium quaerat quidem quo ratione sapiente voluptas voluptatem voluptates.',
    },
    {
      title: 'Title 2',
      content: 'Consectetur adipisicing elit. Ad asperiores consequatur error, in iusto laboriosam laborum laudantium molestiae natus obcaecati porro praesentium quaerat quidem quo ratione sapiente voluptas voluptatem voluptates, lorem ipsum dolor sit amet.',
    },
    {
      title: 'Title 3',
      content: 'Ad asperiores consequatur error, in iusto laboriosam laborum laudantium molestiae natus obcaecati porro praesentium quaerat quidem quo ratione sapiente voluptas voluptatem voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    }
  ];

  getDeviceType() {
    return window.innerWidth <= 600 ? 'small' : 'large';
  }

}

import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  cateogries: Category[] = [];

  constructor(private CategoryService: CategoryService) {
    this.cateogries = this.CategoryService.getCategories();
    console.log(this.cateogries);
  }
}

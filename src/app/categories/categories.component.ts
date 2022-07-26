import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories !: Observable<Category[]>

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAll()
  }

}

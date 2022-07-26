import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
  ) { }

  checkoutForm = this.formBuilder.group({
    categoryName: [null],
  });

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.categoryService.add(this.checkoutForm.value)
    this.checkoutForm.reset()
  }

}

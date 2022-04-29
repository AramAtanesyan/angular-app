import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe number 1', 'test description 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGiAFwPtepfuQzYr5kgTB7Y_WlfNa6cjxSA&usqp=CAU'),
    new Recipe('A test recipe number 2', 'test description 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa13z5dI0EO8N9tghVZSHSGhTT0iqbhyrMvg&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

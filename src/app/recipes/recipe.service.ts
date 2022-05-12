import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe number 1', 'test description 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGiAFwPtepfuQzYr5kgTB7Y_WlfNa6cjxSA&usqp=CAU'),
    new Recipe('A test recipe number 2', 'test description 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa13z5dI0EO8N9tghVZSHSGhTT0iqbhyrMvg&usqp=CAU')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}

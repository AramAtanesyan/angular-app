import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Borshch',
      'soup with meat',
      'https://img.itinari.com/page/content/original/7192322b-f542-46c4-abd3-0c6c5f86b249-alleko.jpg?ch=DPR&dpr=2.625&w=994&s=43055c340df6f1f11173293b9ed247cb',
      [
        new Ingredient('meat', 1),
        new Ingredient('potato', 2)
      ]
    ),
    new Recipe('cheescake',
      'a tasty cake',
      'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg',
      [
        new Ingredient('cheese', 500),
        new Ingredient('butter', 700),
        new Ingredient('strawberry', 3),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}

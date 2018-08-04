import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg?w=680&auto=format'),
    new Recipe('Next Test Recipe', 'This is simply a test', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg?w=680&auto=format')
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}

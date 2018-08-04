import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg?w=680&auto=format'),
    new Recipe('Next Test Recipe', 'This is simply a test', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg?w=680&auto=format')
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}

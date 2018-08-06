import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('In-N-Out',
      'At In-N-Out Burger, quality is everything.',
      'https://cdn.vox-cdn.com/thumbor/6QUP72lS3lPRk7ztA5vPtrqwvq8=/0x0:4519x2758/1820x1213/filters:focal(1899x1018:2621x1740):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60033615/20832096314_7323ec81cc_o.0.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fries', 35 )
      ]),
    new Recipe('Roscoe\'s Chicken and Waffles',
      'Fried chicken and waffles are our specialty!',
      'https://lasentinel.net/wp-content/uploads/sites/5/2018/01/LOC-roscoes.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Waffles', 1 )
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

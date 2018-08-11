import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
  private recipes: Recipe[] = [
    new Recipe('Budae Jjigae',
      'Korean Army Stew, a popular Korean hot pot dish',
      'http://iamafoodblog.com/wp-content/uploads/2017/09/korean-army-stew-8734.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fries', 35 )
      ]),
    new Recipe('Middle Eastern Shakshuka',
      'Shakshuka is top of the list of my favorite egg dishes.',
      'https://www.themediterraneandish.com/wp-content/uploads/2017/01/Shakshuka-Recipe-The-Mediterranean-Dish-100.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Waffles', 1 )
      ]),
    new Recipe('Skillet Bacon Cheeseburger Dough Ball Dip',
      'Bacon Cheeseburger dough ball dip is a perfect dish for game days!',
      'https://cookingtv-channel.com/wp-content/uploads/37947843_1976187535753766_3372326085080383488_n.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Waffles', 1 )
      ]),
    new Recipe('5-Ingredient Sheet Pan Salmon',
      'Perfect dinner for busy weeknights',
      'https://www.platingsandpairings.com/wp-content/uploads/2017/06/5-ingredient-sheet-pan-salmon-2.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Waffles', 1 )
      ]),
    new Recipe('Garlic Butter Shrimp',
      'Best if served over pasta or with a lightly toasted baguette',
      'http://images.huffingtonpost.com/2014-10-19-GarlicButterShrimp.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Waffles', 1 )
      ]),
    new Recipe('Broiled Asian-Style Flat Iron Steak',
      'Best if served with buttered rice and steamed vegetables.',
      'http://images.huffingtonpost.com/2014-10-19-AsianStyleFlatIronSteak.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Waffles', 1 )
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

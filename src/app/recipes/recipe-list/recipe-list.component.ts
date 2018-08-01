import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg?w=680&auto=format'),
    new Recipe('Next Test Recipe', 'This is simply a test', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg?w=680&auto=format')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }

}

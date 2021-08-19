import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'test desc', 'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'),
    new Recipe('Test', 'test desc', 'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'),
    new Recipe('Test', 'test desc', 'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}

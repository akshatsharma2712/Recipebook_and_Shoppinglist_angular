import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()recipeWasSelected= new EventEmitter <Recipe>();
  recipes: Recipe[]=[
    new Recipe('A test Recipe','simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('Second test Recipe','simply a test','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg')
  ];//will store objects of recipe

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);

  }

}

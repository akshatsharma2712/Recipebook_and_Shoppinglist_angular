import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()//to include a service in another service
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe('Rajma Masala',
        'Personal fav!!!',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe-680x510.jpg'
        ,[
            new Ingredient('beans',1),
            new Ingredient('salt',10)
        ]),
        new Recipe('Pav Bhaji',
        'every one will love this!!!',
        'https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2018/09/Pav-Bhaji.jpg',
        [
            new Ingredient('buns',10),
            new Ingredient ('onions',4)
        ])
      ];//will store objects of recipe
      constructor(private slService:ShoppingListService){

      }
    getRecipes(){
        return this.recipes.slice();//will return copy of the original
    }
    addIngredientsToShoppingList(ingredients:Ingredient[])
    {
        this.slService.addIngredients(ingredients);

    }

}
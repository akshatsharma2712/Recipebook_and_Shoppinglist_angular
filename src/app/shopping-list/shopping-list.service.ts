import{Ingredient} from '..//shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { from } from 'rxjs';
export class ShoppingListService {
    ingredientsChanged= new EventEmitter<Ingredient[]>();

 private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',5),
      ];
      getIngredients()
      {
          return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient)
      {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredients(ingredients:Ingredient[])
      {
        // for(let ingredient of ingredients)
        // {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);//es6 to add array to list
        this.ingredientsChanged.emit(this.ingredients.slice());

      }

}
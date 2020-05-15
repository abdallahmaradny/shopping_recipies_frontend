import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipesService{
   private recipes:Recipe[]=[
        new Recipe("botato","Good botato","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",[new Ingredient('konafa',2),new Ingredient('botato',6)]),
        new Recipe("botato11","Good botato","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",[new Ingredient('olokhya',3),new Ingredient('samna',1)])  
      ]

    constructor(private shoppingListService:ShoppingListService){

    }
    recipeSelected=new Subject<Recipe>();
    getRecipes():Recipe[]{
        return this.recipes.slice()

    }
    getRecipe(index:number):Recipe{
         return this.recipes.slice()[index]
    }

    addIngredients(ingredients:Ingredient[]):void{
          this.shoppingListService.addIngredients(ingredients)  
    }
    
}
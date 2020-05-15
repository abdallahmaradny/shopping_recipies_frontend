import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() recipeDetails:Recipe;
  constructor(private recipeService:RecipesService,private activeRoute:ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params:Params)=>{
        this.recipeDetails=this.recipeService.getRecipe(+this.activeRoute.snapshot.params['id'])
      }
    )
  }

  onAddIngToShop(){
  
  }

}

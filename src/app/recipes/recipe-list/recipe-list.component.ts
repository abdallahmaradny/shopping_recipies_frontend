import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe("botato","Good botato","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
  new Recipe("botato","Good botato","https://get.pxhere.com/photo/dish-food-cuisine-ingredient-produce-recipe-meat-vegetarian-food-comfort-food-side-dish-bento-Yong-tau-foo-meal-salad-teriyaki-chinese-food-japanese-cuisine-donburi-1575227.jpg")

]
  constructor() { }

  ngOnInit(): void {
  }

}

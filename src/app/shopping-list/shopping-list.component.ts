import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from './shopping-list.service';
import {Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
ingredients:Ingredient[]=[]
ingredientsSubscription:Subscription;
  constructor(private shoppingListService:ShoppingListService) {
   }

  ngOnInit(): void {
   this.ingredientsSubscription= this.shoppingListService.ingredientsChanged.subscribe((ingredents:Ingredient[])=>
   this.ingredients=this.shoppingListService.getIngredients())
   console.log(this.ingredients)
  }
  ngOnDestroy():void{
    this.ingredientsSubscription.unsubscribe()
  }

  

}

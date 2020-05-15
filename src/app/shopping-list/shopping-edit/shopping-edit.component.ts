import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameValue', { static: true }) nameValue: ElementRef
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(
  ): void {
  }
  onAddButtonClick(amountValue: HTMLInputElement) {
    this.shoppingListService.addIngredient({ name: this.nameValue.nativeElement.value, amount: +amountValue.value })
  }
}

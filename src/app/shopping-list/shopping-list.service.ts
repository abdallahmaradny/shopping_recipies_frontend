import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    //Another way is to remove the slice and return the actual refrence to the object not a copy
    ingredientsChanged=new Subject<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient("apple", 10),
        new Ingredient("onion", 2)
    ]
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    getIngredients(): Ingredient[] {
        return this.ingredients.slice()

    }
}
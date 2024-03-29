import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes:Routes=[
  {path:'',redirectTo:'recipes',pathMatch:'full'},
  {path:'shoppingList',component:ShoppingListComponent},
  {path:'recipes',component:RecipesComponent ,children:[
    {path:'', component:RecipeStartComponent},
    {path:'new', component:RecipeEditComponent},
    {path:':id', component:RecipeDetailsComponent},
    {path:':id/edit', component:RecipeEditComponent}
 
  ]},
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

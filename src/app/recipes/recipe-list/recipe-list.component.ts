import { Component,OnInit,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Pasta', 'Pasta casserole with tomatoes and mozzarella cheese in a cast iron pan on a light grey slate, stone or concrete background.','https://media.istockphoto.com/id/1190036539/photo/pasta-casserole-with-tomatoes-and-mozzarella-cheese-in-a-cast-iron-pan.jpg?b=1&s=170667a&w=0&k=20&c=iPbpz032rVCcSLZ3VEk3vE27XTr1B46cL2l3TTWxHJ4='), 
    new Recipe('Cherry Cream Cheese Dessert', 'Pretty layers of graham cracker crumbs, tasty filling and fruit topping make these cream cheese desserts a standout! For a nice change, you can substitute blueberry pie filling or another fruit flavor for the filling called for in the recipe.','https://www.tasteofhome.com/wp-content/uploads/2018/01/exps21585_THCA153054D10_15_4b.jpg') 
  ];
  constructor(){}
  ngOnInit(){

  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}

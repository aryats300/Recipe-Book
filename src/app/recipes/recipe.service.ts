import { EventEmitter ,Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
     
    private recipes:Recipe[] = [
        new Recipe('Pasta', 'Pasta casserole with tomatoes and mozzarella cheese in a cast iron pan on a light grey slate, stone or concrete background.',
        'https://media.istockphoto.com/id/1190036539/photo/pasta-casserole-with-tomatoes-and-mozzarella-cheese-in-a-cast-iron-pan.jpg?b=1&s=170667a&w=0&k=20&c=iPbpz032rVCcSLZ3VEk3vE27XTr1B46cL2l3TTWxHJ4=', 
        [
          new Ingredient('Pasta',1),
          new Ingredient('Onion',1),
          new Ingredient('Tomatos',1),
        ]),
        new Recipe('Cherry Cream Cheese Dessert', 
        'Pretty layers of graham cracker crumbs,tasty filling and fruit topping make these cream cheese desserts a standout!', 
        'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps21585_THCA153054D10_15_4b.jpg',
        [
          new Ingredient('Cup crushed shortbread cookies ',1),
          new Ingredient('Unsalted butter',3),
          new Ingredient('Sugar',2)
         
        ])
      ];
      constructor(private slService:ShoppingListService){

      }
    
      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(index: number){
        return this.recipes.slice()[index];
      }
      addingIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

}
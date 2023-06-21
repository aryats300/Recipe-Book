import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public type: string;
  public category: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, type:string, category:string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.type = type;
    this.category = category;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

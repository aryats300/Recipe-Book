import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    console.log('Recipes being sent to Firebase:', recipes); // Log the recipes data being sent to Firebase
    this.http
      .put(
        'https://recipebook-caa90-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(
        response => {
          console.log('Firebase response:', response); // Log the response from Firebase
        },
        error => {
          console.error('Error storing recipes in Firebase:', error); // Log any errors that occur
        }
      );
  }
  
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipebook-caa90-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          if (!recipes) {
            return []; 
          }
  
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
  
}

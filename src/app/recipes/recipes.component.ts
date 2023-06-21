import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  
  // RecipeType: any;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    // this.dataStorageService.fetchRecipeType().subscribe((recipe:any)=>{
    //   this.RecipeType=recipe;
    // })
  }
}

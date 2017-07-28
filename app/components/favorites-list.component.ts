import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorite';

@Component({
  selector: 'favorites-list',
  templateUrl: 'app/views/favorites-list.html',
  providers: [ FavoriteService ]
})

export class FavoritesListComponent implements OnInit{
  public title: string;
  public favorites: Favorite[];
  public errorMessage;

  constructor(
    private _favoriteService: FavoriteService
  ){
    this.title = 'Markers List:';
  }

  ngOnInit(){
    console.log('FavoritesListComponent loaded!!');
    this._favoriteService.getFavorites().subscribe(
      result => {
        console.log(result);
        this.favorites = result.favorites;

        if(!this.favorites){
          alert('Server Error');
        }
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert('Request Error!');
        }
      }
    );
  }

}

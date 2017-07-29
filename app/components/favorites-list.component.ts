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
  public loading: boolean;

  public favorites: Favorite[];
  public errorMessage;

  public confirm;

  constructor(
    private _favoriteService: FavoriteService
  ){
    this.title = 'Markers List:';
    this.loading = true;
  }

  ngOnInit(){
    console.log('FavoritesListComponent loaded!!');
    this.getFavorites();
  }

  getFavorites(){
    this._favoriteService.getFavorites().subscribe(
      result => {
        console.log(result);
        this.favorites = result.favorites;

        if(!this.favorites){
          alert('Server Error');
        }else{
          this.loading = false;
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

  onDeleteConfirm(id){
    this.confirm = id;
  }

  onCancelConfirm(id){
    this.confirm = null;
  }

  onDeleteFavorite(id){
    this._favoriteService.deleteFavorite(id).subscribe(
      result => {
        if(!result.message){
          alert('Request Error')
        }
        this.getFavorites();
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert('Request Error!');
        }
      }
    )
  }

}

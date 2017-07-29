import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service'
import { Favorite } from '../models/favorite'

@Component({
    selector: 'favorite-edit',
    templateUrl: 'app/views/favorite-add.html',
    providers: [ FavoriteService ]
})

export class FavoriteEditComponent implements OnInit{
  public titleSection:string;
  public favorite: Favorite;
  public errorMessage: any;

  constructor(
    private _favoriteService: FavoriteService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titleSection = "Edit favorite"
  }

  ngOnInit(){
    this.favorite = new Favorite("","","","");
    this.getFavorite();
  }

  getFavorite(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._favoriteService.getFavorite(id).subscribe(
        response => {
          this.favorite = response.favorite;

          if(!this.favorite){
            this._router.navigate(['/']);
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
    })
  }

  public onSubmit(){
    console.log(this.favorite);
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._favoriteService.editFavorite(id, this.favorite).subscribe(
        response => {
          if(!this.favorite){
            alert('Server error');
          }else{
            this.favorite = response.favorite;
            this._router.navigate(['/marker', this.favorite._id]);
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
    });
  }
}

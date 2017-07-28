import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service'
import { Favorite } from '../models/favorite'

@Component({
    selector: 'favorite-add',
    templateUrl: 'app/views/favorite-add.html',
    providers: [ FavoriteService ]
})

export class FavoriteAddComponent implements OnInit{
  public titleSection:string;
  public favorite: Favorite;
  public errorMessage: any;

  constructor(
    private _favoriteService:FavoriteService,
    private _route:ActivatedRoute,
    private _router: Router
  ){
    this.titleSection = "Create new favorite"
  }

  ngOnInit(){
    this.favorite = new Favorite("","","","");
    console.log(this.favorite);

  }

  public onSubmit(){
    console.log(this.favorite);

    this._favoriteService.addFavorite(this.favorite).subscribe(
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
  }
}

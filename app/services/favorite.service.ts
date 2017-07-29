import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Favorite } from '../models/favorite'

@Injectable()
export class FavoriteService{
  public url: string;

  constructor(private _http: Http){
    this.url = 'http://localhost:3678/api/';
  }

  getFavorites(){
    return this._http.get(this.url + 'favorites')
                     .map(res => res.json());
  }

  getFavorite(id: string){
    return this._http.get(this.url + 'favorite/' + id)
                     .map(res => res.json());
  }

  addFavorite(favorite: Favorite){
    let json = JSON.stringify(favorite);
    let params = json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url + 'favorite', params, {headers: headers})
                      .map(res => res.json());
  }

  editFavorite(id: string, favorite: Favorite){
    let json = JSON.stringify(favorite);
    let params = json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.put(this.url + 'favorite/' + id, params, {headers: headers})
                      .map(res => res.json());
  }
}

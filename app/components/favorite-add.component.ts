import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service'
import { Favorite } from '../models/favorite'

@Component({
    selector: 'favorite-add',
    templateUrl: 'app/views/favorite-add.html'
})

export class FavoriteAddComponent {


  constructor(){

  }
}

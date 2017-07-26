import {Component} from '@angular/core';

@Component({
  selector: 'favorites-list',
  templateUrl: 'app/views/favorites-list.html'
})

export class FavoritesListComponent {
  public title: string;


  constructor(){
    this.title = 'Markers List:';

  }

}

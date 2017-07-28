import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.html'
})

export class AppComponent {
  public title: string;
  public description: string;

  constructor(){
    this.title = "Favorites URL App!"
    this.description = "SPA web app with Angular2 to manage favorite urls"
  }
}

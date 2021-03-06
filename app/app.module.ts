import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { FavoritesListComponent } from './components/favorites-list.component';
import { FavoriteDetailComponent } from './components/favorite-detail.component';
import { FavoriteAddComponent } from './components/favorite-add.component';
import { FavoriteEditComponent } from './components/favorite-edit.component';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing
   ],
  declarations: [
                AppComponent,
                FavoritesListComponent,
                FavoriteDetailComponent,
                FavoriteAddComponent,
                FavoriteEditComponent
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

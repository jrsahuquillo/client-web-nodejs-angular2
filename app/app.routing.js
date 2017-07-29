"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favorites_list_component_1 = require("./components/favorites-list.component");
var favorite_detail_component_1 = require("./components/favorite-detail.component");
var favorite_add_component_1 = require("./components/favorite-add.component");
var favorite_edit_component_1 = require("./components/favorite-edit.component");
var appRoutes = [
    { path: '', component: favorites_list_component_1.FavoritesListComponent },
    { path: 'marker/:id', component: favorite_detail_component_1.FavoriteDetailComponent },
    { path: 'create-marker', component: favorite_add_component_1.FavoriteAddComponent },
    { path: 'edit-marker/:id', component: favorite_edit_component_1.FavoriteEditComponent },
    { path: '**', component: favorites_list_component_1.FavoritesListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
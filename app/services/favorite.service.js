"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var FavoriteService = (function () {
    function FavoriteService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3678/api/';
    }
    FavoriteService.prototype.getFavorites = function () {
        return this._http.get(this.url + 'favorites')
            .map(function (res) { return res.json(); });
    };
    FavoriteService.prototype.getFavorite = function (id) {
        return this._http.get(this.url + 'favorite/' + id)
            .map(function (res) { return res.json(); });
    };
    FavoriteService.prototype.addFavorite = function (favorite) {
        var json = JSON.stringify(favorite);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'favorite', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FavoriteService.prototype.editFavorite = function (id, favorite) {
        var json = JSON.stringify(favorite);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + 'favorite/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        return this._http.delete(this.url + 'favorite/' + id)
            .map(function (res) { return res.json(); });
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=favorite.service.js.map
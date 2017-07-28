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
var router_1 = require("@angular/router");
var favorite_service_1 = require("../services/favorite.service");
var favorite_1 = require("../models/favorite");
var FavoriteAddComponent = (function () {
    function FavoriteAddComponent(_favoriteService, _route, _router) {
        this._favoriteService = _favoriteService;
        this._route = _route;
        this._router = _router;
        this.titleSection = "Create new favorite";
    }
    FavoriteAddComponent.prototype.ngOnInit = function () {
        this.favorite = new favorite_1.Favorite("", "", "", "");
        console.log(this.favorite);
    };
    FavoriteAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.favorite);
        this._favoriteService.addFavorite(this.favorite).subscribe(function (response) {
            if (!_this.favorite) {
                alert('Server error');
            }
            else {
                _this.favorite = response.favorite;
                _this._router.navigate(['/marker', _this.favorite._id]);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Request Error!');
            }
        });
    };
    FavoriteAddComponent = __decorate([
        core_1.Component({
            selector: 'favorite-add',
            templateUrl: 'app/views/favorite-add.html',
            providers: [favorite_service_1.FavoriteService]
        }),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], FavoriteAddComponent);
    return FavoriteAddComponent;
}());
exports.FavoriteAddComponent = FavoriteAddComponent;
//# sourceMappingURL=favorite-add.component.js.map
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
var graph_service_1 = require("./graph.service");
var GraphComponent = (function () {
    function GraphComponent(graphService) {
        this.graphService = graphService;
        var user = new graph_service_1.User();
        this.me = user;
    }
    GraphComponent.prototype.getMe = function () {
        var _this = this;
        this.graphService.getMe().then(function (user) {
            _this.me = user;
        });
    };
    return GraphComponent;
}());
GraphComponent = __decorate([
    core_1.Component({
        selector: 'message',
        template: "<button (click)=\"getMe()\">Get me</button>\n       <div>{{me.displayName}}</div>"
    }),
    __metadata("design:paramtypes", [graph_service_1.GraphService])
], GraphComponent);
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map
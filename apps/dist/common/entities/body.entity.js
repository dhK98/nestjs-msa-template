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
exports.Body = exports.AthleticCareer = void 0;
const typeorm_1 = require("typeorm");
const user_body_entity_1 = require("./user-body.entity");
var AthleticCareer;
(function (AthleticCareer) {
    AthleticCareer["beginner"] = "beginner";
    AthleticCareer["intermediate"] = "intermediate";
    AthleticCareer["advanced"] = "advanced";
})(AthleticCareer || (exports.AthleticCareer = AthleticCareer = {}));
let Body = class Body {
};
exports.Body = Body;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Body.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'double'
    }),
    __metadata("design:type", Number)
], Body.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'double'
    }),
    __metadata("design:type", Number)
], Body.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'double'
    }),
    __metadata("design:type", Number)
], Body.prototype, "smm", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'double'
    }),
    __metadata("design:type", Number)
], Body.prototype, "bfm", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'enum',
        enum: AthleticCareer
    }),
    __metadata("design:type", String)
], Body.prototype, "athleticCareer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_body_entity_1.UserBody, userBody => userBody.body),
    __metadata("design:type", Array)
], Body.prototype, "users", void 0);
exports.Body = Body = __decorate([
    (0, typeorm_1.Entity)()
], Body);
//# sourceMappingURL=body.entity.js.map
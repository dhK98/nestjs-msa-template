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
exports.User = exports.Gender = exports.Role = exports.LoginType = void 0;
const typeorm_1 = require("typeorm");
const user_body_entity_1 = require("./user-body.entity");
var LoginType;
(function (LoginType) {
    LoginType["kakao"] = "KAKAO";
    LoginType["google"] = "GOOGLE";
    LoginType["naver"] = "NAVER";
})(LoginType || (exports.LoginType = LoginType = {}));
var Role;
(function (Role) {
    Role["user"] = "USER";
    Role["admin"] = "ADMIN";
})(Role || (exports.Role = Role = {}));
var Gender;
(function (Gender) {
    Gender["male"] = "MALE";
    Gender["female"] = "FEMALE";
})(Gender || (exports.Gender = Gender = {}));
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: LoginType,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "socalLoginType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar'
    }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'boolean'
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isReceivedAdvertisement", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], User.prototype, "bod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar'
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'enum',
        enum: Gender
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'enum',
        enum: Role
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'boolean',
        default: false
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_body_entity_1.UserBody, userBody => userBody.user),
    __metadata("design:type", Array)
], User.prototype, "bodies", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map
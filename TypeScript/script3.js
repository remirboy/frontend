"use strict";
//OOP
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "Hello, I'm " + this.name;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, experience) {
        var _this = _super.call(this, name, age) || this;
        _this.experience = experience;
        return _this;
    }
    Employee.prototype.sayHello = function () {
        var name = _super.prototype.sayHello.call(this);
        return "How can I help you?";
    };
    return Employee;
}(Person));
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(name, age, money) {
        var _this = _super.call(this, name, age) || this;
        _this.money = money;
        return _this;
    }
    Client.prototype.sayHello = function () {
        var name = _super.prototype.sayHello.call(this);
        return "Thank you";
    };
    Client.prototype.buy = function (price) {
        return this.money = this.money - price;
    };
    return Client;
}(Person));
//# sourceMappingURL=script3.js.map
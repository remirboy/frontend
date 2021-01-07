"use strict";
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
var Cars;
(function (Cars) {
    var Car = /** @class */ (function () {
        function Car(name) {
            this.name = name;
        }
        return Car;
    }());
    Cars.Car = Car;
    var LADA;
    (function (LADA) {
        var Samara = /** @class */ (function (_super) {
            __extends(Samara, _super);
            function Samara(transmission, name) {
                var _this = _super.call(this, name) || this;
                _this.transmission = transmission;
                return _this;
            }
            Samara.prototype.sayTrans = function () {
                return this.transmission;
            };
            return Samara;
        }(Cars.Car));
        LADA.Samara = Samara;
        var Classic = /** @class */ (function (_super) {
            __extends(Classic, _super);
            function Classic(transmission, name) {
                var _this = _super.call(this, name) || this;
                _this.transmission = transmission;
                return _this;
            }
            Classic.prototype.sayTrans = function () {
                return this.transmission;
            };
            return Classic;
        }(Cars.Car));
        LADA.Classic = Classic;
    })(LADA = Cars.LADA || (Cars.LADA = {}));
})(Cars || (Cars = {}));
var sam = new Cars.LADA.Samara('fr', "VAZ 2109");
console.log(sam.sayTrans());
//# sourceMappingURL=script4.js.map
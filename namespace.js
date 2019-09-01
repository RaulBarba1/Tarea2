"use strict";
exports.__esModule = true;
var MySpace;
(function (MySpace) {
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.myProperty = 1;
        return MyClass;
    }());
    MySpace.MyClass = MyClass;
})(MySpace || (MySpace = {}));
console.log(MySpace.MyClass.MyProperty);
console.log(MySpace.MyClass.MyProperty);

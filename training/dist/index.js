"use strict";
let age = 20;
if (age < 50)
    age += 10;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
let mySize = Size.medium;
console.log(mySize);
//# sourceMappingURL=index.js.map
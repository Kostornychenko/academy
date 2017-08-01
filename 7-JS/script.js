/*function sum(a, b, c) {
    arguments[0] = 0;
    //console.log(arguments.length);
    var sum = a + b + c;
    return sum;
}


console.log(sum(5, 10, 15, 20, 25));*/
//console.log(sum(5,10));

/*var obj = {"float": "left", "display": "block"};
//var obj = new Object();
//console.log(obj);

obj.float = "right";
obj.height = 300;
obj.margin = false;
obj.padding = undefined;
obj.height = 30;
obj.menu = {
    width: 500,
    height: 400
};
obj.func = function (a, b) {
  return a - b;
};
console.log(obj);
console.log(obj.menu.width);*/

/*if ("padding" in obj) {
    console.log(obj.padding);
} else {
    console.log("no padding");
}*/

/*console.log(obj);
console.log(obj.margin);
console.log(obj.height);
console.log(obj.padding);
console.log(obj.overflow);

delete obj.height;

console.log(obj);
console.log(obj.height);*/


/*var menu = {"float": "left"};

var name = 'height of my menu';


menu.width = 600;
menu['margin'] = "auto";
menu['120'] = "120";
menu['1'] = 1;
menu['5'] = true;
menu.padding = true;
menu.inner = {
    "float": "left",
    "position": "fixed",
    "background": "red"
};
menu[name] = 300;
menu.padding = false;

var count = 0;
for (var i in menu) {
    console.log(i);
    console.log(menu[i]);
    console.log("====");
    count++;
}*/



/*console.log(typeof menu['1']);
console.log(count);
console.log(menu);*/


var obj1 = {float: "left", margin: 500};

var obj2 = obj1;
var obj3 = obj2;

console.log(obj1);
console.log(obj2);
console.log(obj3);

obj2.float = "right";
obj3.margin = 0;

console.log(obj1);
console.log(obj2);
console.log(obj3);





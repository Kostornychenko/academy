
/*var str = "a,b,c, d";
var arr = str.split(",");
//alert(typeof arr);
for(var i = 0; i < arr.length; i++) {
    alert(arr[i]);
}*/


var arr  = ["first", 12, "str", {}, 12312, "last"];
//var str = arr.join(" ");*/

var arr2 = arr.slice(1, 3);
var arr3 = arr2.concat(arr);

/*arr.sort(function () {
});*/
//arr.reverse();

delete arr[3];
alert(arr.length);

alert(arr);



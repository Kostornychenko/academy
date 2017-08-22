var header = "{margin:25px;height:900px;width:100%}";
var main = "{padding:0 0 10px;margin:25px;width:100%}";
var wrap = "{margin:0 auto;width:960px}";
var footer = "{float:left;padding:0 0 10px;background:#eeaaa3}";

/**/

var result = [];
var str = [header, main, wrap, footer];

for (var i = 0; i < str.length; i++) {
    result[i] = {};
    str[i] = str[i].slice(1,-1).split(";");
    //console.log(str[i]);
    for(var j = 0; j < str[i].length; j++) {
        str[i][j] = str[i][j].split(":");
        //console.log(str[i][j][0]);
        //console.log(str[i][j][1]);
        result[i][str[i][j][0]] = str[i][j][1];
    }
    //console.log(result[i]);
}

console.log(result);
var tmp = {};
var same = {};
for (i = 0; i < result.length; i++) {
    for(var key in result[i]) {
        if (key in tmp) {
            if (result[i][key] === tmp[key]) {
                same[key] =  tmp[key];
            }
        } else {
            tmp[key] = result[i][key];
        }
    }
}
console.log(tmp);
console.log(same);
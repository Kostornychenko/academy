var month = "January,February,March,April,May,June,July,August,September,October,November,December";
/////
month = month.split(",");

var calendar = {};
for (var i = 0; i < month.length; i++) {
    if (i < 7){
        if (i % 2 == 0) {
            calendar[month[i]] = {number: i + 1, days: 31};
        } else {
            calendar[month[i]] = {number: i + 1, days: 30};
        }
    } else {
        if (i % 2 == 0) {
            calendar[month[i]] = {number: i + 1, days: 30};
        } else {
            calendar[month[i]] = {number: i + 1, days: 31};
        }
    }
}
calendar['February']['days'] = 28;
console.log(calendar);

var winter = {};
var spring = {};
var summer = {};
var autumn = {};

for (var key in calendar) {
    if (calendar[key]['number'] < 3) {
        winter[key] = calendar[key];
    } else if (calendar[key]['number'] < 6) {
        spring[key] = calendar[key];
    } else if (calendar[key]['number'] < 9) {
        summer[key] = calendar[key];
    } else if (calendar[key]['number'] < 12){
        autumn[key] = calendar[key];
    } else {
        winter[key] = calendar[key];
    }
}

console.log(winter);
console.log(spring);
console.log(summer);
console.log(autumn);

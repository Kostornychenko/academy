var new_str, str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

var tmp = str.slice(0, -1);

var text = tmp.split(". ");

for (var i = 0; i < text.length; i++) {
    text[i] = text[i].split(" ");
    text[i].sort(compare);
    text[i] = text[i].join(" ");
    text[i] += ".";
}
new_str = text.join(" ");

function compare (a, b) {
    return b.length - a.length;
}
console.log(str);
console.log("======")
console.log(new_str);
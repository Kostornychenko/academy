var tags = document.getElementsByTagName("*");
var arrayTags = [], resultObj = {}, tagCount = 0;

//console.log(tags);
for (var i = 0; i < tags.length; i++) {
    arrayTags.push(tags[i].localName);
}
//console.log(arrayTags);

arrayTags.sort();
//console.log(arrayTags);

for (i = 0; i < arrayTags.length; i++) {
    if (arrayTags[i] == arrayTags[i-1]) {
        tagCount++;
    } else {
        resultObj[arrayTags[i-1]] = tagCount;
        tagCount = 1;
    }
}
//console.log(resultObj);

arrayTags = [];

for (var prop in resultObj) {
    arrayTags.push({tag: prop, count: resultObj[prop]});
}

console.log(arrayTags);

arrayTags.sort(function sort(a, b) {
    return b.count - a.count;
});

createPopup(arrayTags);

/*******/

/* button show/hide popup */
function toggleBtn() {
    var popup = document.getElementById("popup");
    if (popup.getAttribute("class") == "none") {
        popup.setAttribute("class", "");
    } else {
        popup.setAttribute("class", "none");
    }
}

/* create popup and add inner elements */
function createPopup(arrayTags) {
    var popup = document.createElement("div");
    popup.setAttribute("id", "popup");
    popup.setAttribute("class", "none");
    document.body.appendChild(popup);

    for (i = 0; i < arrayTags.length; i++) {
        var element = document.createElement("p");
        if (arrayTags[i].count != 0) {
            element.innerHTML = "<span>" + arrayTags[i].tag + "</span><span>" + arrayTags[i].count + "</span>" + "<button class='del'>delete</button>";
            popup.appendChild(element);
        }
    }
}
var buttons = document.getElementsByClassName("del");
console.log(buttons);
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", remove);
}

function remove() {
    var name = this.parentElement.firstElementChild.innerHTML;

    var tags = wrap.getElementsByTagName(name);
    console.log(tags);
    for(var i = 0; i < tags.length; i++){
        tags[i].remove();
        i--;
    }
}
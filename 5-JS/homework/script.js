var n = parseInt(prompt("Enter number of progression members", "5"));
var a1 = parseInt(prompt("Enter first member", "10"));
var type = prompt("Enter arithmetic(a) or geometric(g)", "a");
switch (type) {
    case "a":
        var d = parseInt(prompt("Enter difference of the progression", "10"));
        alert(arithmetic(a1, n, d));
        break;
    case "g":
        var q = parseInt(prompt("Enter denominator of the progression", "2"));
        alert(geometric(a1, n, q));
        break;
    default:
        alert("Wrong type!");
}

function arithmetic(a1, n, d) {
    return (2 * a1 + d * (n - 1)) / 2 * n;
}

function geometric(b1, n, q) {
    if (q === 1) {
        return n * b1;
    } else {
        return b1 * (1 - Math.pow(q, n)) / (1 - q);
    }
}
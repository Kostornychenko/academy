var userInfo = [];

$("#submit").click(function (event) {
    event.preventDefault();
    $("form div").each(function () {
        var key = $(this).children("input[name]").attr("name"), value = $(this).children("input[name]").val();
        var prop;
        if ($(this).children("input[type='checkbox']").prop("checked")) {
            prop = New.withValidate(key, value);
        } else {
            prop = new New(key, value);
        }
        userInfo.push(prop);
    });
    $("input[name]").val("");
    $("input[type='checkbox']").prop("checked", false);
    console.log(userInfo);
});
function New(key, value) {
    this[key] = value;
}
New.withValidate = function (key, value) {
    var prop = new New(key, value);
    prop.validate = function () {
        console.log("validation");
    };
    return prop;
};
$(document).ready(function() {
    var parent = $("#bg");
    var divs = $(".img_lg");
    while (divs.length) {
        var child = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
        parent.append(child);
    }
});

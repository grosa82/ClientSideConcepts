function toggle() {
    $("#result").toggle();
}
$(document).ready(function () {
    $("#update").click(function () {
        if (confirm("Are you sure you want to update the div?")) {
            $("#result").css("backgroundColor", $("#color").val());
            $("#result").html($("#text").val());
        }
    });
});
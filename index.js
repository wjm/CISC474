$(function () {
    //this code runs after page is fully loaded
    $("#nameform").submit(function (e) {
        $(".jumbotron h1")[0].innerHTML = $("#lname").val() + " " + $("#fname").val()
        $(".jumbotron").removeClass("d-none");
        e.preventDefault();
        return false;
    });
});
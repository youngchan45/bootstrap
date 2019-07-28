
$(document).ready(function () {
    // $("#dia").click(function () { 
    //     $("#dia-cli").toggle();
    //     $("#dia-img").attr("src","../img/关闭.svg");

    // });
    //  $("#dia-img").click(function(){
    //     $("#dia-cli").hide();
    //     $("#dia-img").attr("src","../img/聊天记录.svg");
    //  })
    // $("#dia-cli").hide(function(){
    //     $("#dia-img").attr("src","../img/聊天记录.svg");
    // })
    $("#dia").click(function () {
        $("#dia-cli").toggle();

        if ($(this).find("#dia-img").attr("src") == "../img/聊天记录.svg") {
            // $("#dia-cli").show();
            $(this).find("#dia-img").attr("src", "../img/关闭.svg")
        } else {
            $(this).find("#dia-img").attr("src", "../img/聊天记录.svg")
        }
    })

});

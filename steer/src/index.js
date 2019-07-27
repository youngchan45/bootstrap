
$(document).ready(function(){
    // function hidedia(){
    //     $("#dia-cli").hide();
    // }
    $("#dia").click(function(){
        $("#dia-cli").toggle();
        $("#more").attr("src")=="img/关闭.svg";
    });
    $("#dia-cli").on("show",function(){
        // $("#more").attr("src")=="../img/关闭.svg";
    })


});

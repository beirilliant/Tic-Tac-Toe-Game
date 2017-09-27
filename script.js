    var player;
    $(".form-check-input").click(function() {
        player = $(this).val();
        $("#startMessage").css("display","none");
    });

    $(".cell").click(function() {
        $(this).html(player);
    });
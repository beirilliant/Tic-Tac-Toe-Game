    var huPlayer;
    var coPlayer;
    var players = ["X", "O"];
    var boardArray = Array.from(Array(9).keys());
    var cellId;

    $(".form-check-input").click(function() {
        huPlayer = $(this).val();
        players.splice($.inArray(huPlayer, players), 1);
        coPlayer = players[0];
        console.log(coPlayer);
        $("#startMessage").css("display","none");
    });

    $(".cell").click(function() {
        cellId = $(this).attr("id");
        if ($.inArray(parseInt(cellId), boardArray) == -1) {
            return
        } else {
            $(this).html(huPlayer);      
            takeSpot(parseInt(cellId));
            coMove();
        }
    });

    function takeSpot(spot) {
        boardArray.splice($.inArray(spot, boardArray), 1);
        console.log(boardArray);
    }

    function coMove() {
        var randomNum = Math.floor(Math.random() * boardArray.length);
        console.log(randomNum);
        $("#" + boardArray[randomNum]).html(coPlayer);
        takeSpot(boardArray[randomNum]);  
    }
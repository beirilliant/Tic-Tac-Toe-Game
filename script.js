    var huPlayer;
    var coPlayer;
    var players = ["X", "O"];
    var boardArray = Array.from(Array(9).keys());
    var cellId;
    const winCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    var huArr = [];
    var coArr = [];
    var end = 0;
    var message = "";

    $(".form-check-input").click(function() {
        huPlayer = $(this).val();
        players.splice($.inArray(huPlayer, players), 1);
        coPlayer = players[0];
        $("#startMessage").css("display","none");
    });

    $(".cell").click(function() {
        if (end == 1) {
            boardArray = [];
        }
        cellId = $(this).attr("id");
        if ($.inArray(parseInt(cellId), boardArray) == -1) {
            return
        } else {
            $(this).html(huPlayer);  
            huArr.push(parseInt(cellId));
            console.log(huArr);   
            takeSpot(parseInt(cellId));
            winGame();
            if (end == 1) {
                boardArray = [];
            }
            setTimeout(coMove, 500);
        }
    });

    function takeSpot(spot) {
        boardArray.splice($.inArray(spot, boardArray), 1);
    }

    function coMove() {
        var randomNum = Math.floor(Math.random() * boardArray.length);
        $("#" + boardArray[randomNum]).html(coPlayer);
        coArr.push(boardArray[randomNum]);
        console.log(coArr);
        takeSpot(boardArray[randomNum]);
        winGame();
    }

    function winGame() {
        winCombo.forEach(function(combo) {
            if (coArr.length >= 3 && $.inArray(combo[0], coArr) >= 0 && $.inArray(combo[1], coArr) >= 0 && $.inArray(combo[2], coArr) >= 0) {
                message = "Oh no! The computer wins!";
                endGame();
            }
            if (huArr.length >= 3 && $.inArray(combo[0], huArr) >= 0 && $.inArray(combo[1], huArr) >= 0 && $.inArray(combo[2], huArr) >= 0) {
                message = "Congratulations! You win!";
                endGame();
            } else if (coArr.length + huArr.length == 9 && boardArray.length == 0) {
                message = "It is a draw!";
                endGame();
            } else {
                return
            }
        });
    }

    function endGame() {
        $("#text").css("display","initial");
        $("#text").html(message);
        end = 1;
        setTimeout(startGame, 2000);
    }

    function startGame() {
        $(".cell").html("");
        boardArray = Array.from(Array(9).keys());
        huArr = [];
        coArr = [];
        $("#text").html("");
        $("#text").css("display","none");
        end = 0;
        message = "";
    }
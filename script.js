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

    $(".form-check-input").click(function() {
        huPlayer = $(this).val();
        players.splice($.inArray(huPlayer, players), 1);
        coPlayer = players[0];
        $("#startMessage").css("display","none");
    });

    $(".cell").click(function() {
        cellId = $(this).attr("id");
        if ($.inArray(parseInt(cellId), boardArray) == -1) {
            return
        } else {
            $(this).html(huPlayer);  
            huArr.push(parseInt(cellId));
            console.log(huArr);   
            takeSpot(parseInt(cellId));
            winGame();
            coMove();
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
                $("#text").html("The computer wins!");
                startGame();
            }
            if (huArr.length >= 3 && $.inArray(combo[0], huArr) >= 0 && $.inArray(combo[1], huArr) >= 0 && $.inArray(combo[2], huArr) >= 0) {
                $("#text").html("Congratulations! You win!");
                startGame();
            } else if (boardArray.length == 0) {
                $("#text").html("It is a draw!");
                startGame();
            } else {
                return
            }
        });
    }
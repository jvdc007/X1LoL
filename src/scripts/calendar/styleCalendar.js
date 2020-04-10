function moldFree(free, n){
    if(free == 3 || free == n){
        return 'mold moldF';
    }else{
        return 'mold';
    }
}

function gamesInRound(id, pl){
    if(id % 2 == 0){
        if(pl == 0){
            return `vs gamesInRound`;
        }
        return `player${pl} gamesInRound`;
    }else{
        if(id == 1){
            return `player${pl} game1`;
        }
        return `player${pl}`;
    }
}

function gameResult(player, game){
    if((player == game.player1 && game.winner == 1) || (player == game.player2 && game.winner == 2)){
        return 'nick winner';
    }
    else{
        return 'nick';
    }
}
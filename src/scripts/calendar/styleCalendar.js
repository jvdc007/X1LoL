function moldFree(free, n){
    if(free == 3 || free == n){
        return 'mold moldF';
    }else{
        return 'mold';
    }
}

function moldChosen(game, champ, id){
    if(id == 1){
        if(game.champ1 == champ){
            return 'moldCh';
        }
    }else{
        if(game.champ2 == champ){
            return 'moldCh';
        }
    }
    return 'moldFail';
}

function gamesInRound(id, pl, i){
    let cl;
    if(i < 18){
        cl = regularGames(id, pl);
    }else if(i == 18){
        cl = gamesMd3(id, pl);
    }else if(i == 19 || i == 20){
        cl = gamesMd5(id, pl);
    }else if(i == 21){
        cl = gamesMd7(id, pl);
    }
    return cl;
}

function regularGames(id, pl){
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

function gamesMd3(id, pl){
    if(id % 3 == 0){
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

function gamesMd5(id, pl){
    if(id % 5 == 0){
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

function gamesMd7(id, pl){
    if(id % 7 == 0){
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
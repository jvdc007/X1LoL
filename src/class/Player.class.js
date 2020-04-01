let rounds = createRounds();

function player(nick){
    let games = 0;
    let wins = 0;
    let ks = 0;
    let pt = 0;
    let kills = 0;
    let farm = 0;
    let towers = 0;
    let hist = []
    rounds.forEach(round => {
        let gameAnt = 0;
        round.forEach(game => {
            games += getGames(game, nick);
            wins += getWins(game, nick);
            if(game.id % 2 == 1){
                gameAnt = game;
            }else{
                ks += getKs(game, gameAnt, nick);
                pt += getPt(game, gameAnt, nick);
            }
            kills += getKills(game, nick);
            farm += getFarm(game, nick);
            towers += getTowers(game, nick);
            hist.unshift(getChamp(game, nick));
        });
    });
    pt = getPt(wins, ks);
    hist = setHist(hist);
    return {
        nick: nick,
        icon: getIcon(nick),
        games: games,
        wins: wins,
        ks: ks,
        pt: pt,
        kills: kills,
        farm: farm,
        towers: towers,
        hist: hist
    }
}

function getIcon(nick){
    return `imgs/players/${nick}.png`;
}

function getGames(game, nick){
    if((game.player1 == nick || game.player2 == nick) && game.winner != 0){
        return 1;
    }else{
        return 0;
    }
}

function getWins(game, nick){
    if((game.player1 == nick && game.winner == 1) || (game.player2 == nick && game.winner == 2)){
        return 1;
    }else{
        return 0;
    }
}

function getKs(game, gameAnt, nick){
    if(((gameAnt.player1 == nick && gameAnt.winner == 1) && (game.player2 == nick && game.winner == 2))
    || ((gameAnt.player2 == nick && gameAnt.winner == 2) && (game.player1 == nick && game.winner == 1))){
        return 1;
    }else{
        return 0;
    }
}

function getPt(wins, ks){
    return (ks*3) + (wins - (ks*2));
}

function getKills(game, nick){
    if((game.player1 == nick && game.winner == 1 ) || (game.player2 == nick && game.winner == 2)){
        if(game.form == 1){
            return 1;
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}

function getFarm(game, nick){
    if((game.player1 == nick && game.winner == 1 ) || (game.player2 == nick && game.winner == 2)){
        if(game.form == 2){
            return 1;
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}

function getTowers(game, nick){
    if((game.player1 == nick && game.winner == 1 ) || (game.player2 == nick && game.winner == 2)){
        if(game.form == 3){
            return 1;
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}

function getChamp(game, nick){
    if(game.player1 == nick){
        return game.champ1;
    }if(game.player2 == nick){
        return game.champ2;
    }return null;
}

function setHist(hist){
    while(hist.indexOf(null) != -1){
        let pos = hist.indexOf(null);
        hist.splice(pos, 1);
    }
    return hist;
}
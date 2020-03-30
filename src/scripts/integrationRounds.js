let rounds = [
    round1(),
    round2(),
    round3()
]

function player(nick){
    let games = 0;
    let wins = 0;
    let ks = 0;
    let kills = 0;
    let farm = 0;
    let towers = 0;
    rounds.forEach(round => {
        let gameAnt = 0;
        round.forEach(game => {
            games += getGames(game, nick);
            wins += getWins(game, nick);
            if(game.id % 2 == 1){
                gameAnt = game;
            }else{
                ks += getKs(game, gameAnt, nick);
            }
            ks += getKs(game, nick);
            kills += getKills(game, nick);
            farm += getFarm(game, nick);
            towers += getTowers(game, nick);
        });
    });
    return {
        nick: nick,
        icon: getIcon(nick),
        games: games,
        wins: wins,
        ks: ks,
        kills: kills,
        farm: farm,
        towers: towers
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
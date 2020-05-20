let rounds = createGames();

function player(nick){
    let games = 0;
    let wins = 0;
    let ks = 0;
    let kills = 0;
    let farm = 0;
    let towers = 0;
    let hist = [];
    ////////////////////
    let quarG = 0;
    let quarW = 0;
    let quarP = 0;
    let semiG = 0;
    let semiW = 0;
    let semiP = 0;
    let tercG = 0;
    let tercW = 0;
    let tercP = 0;
    let finalG = 0;
    let finalW = 0;
    let finalP = 0;

    rounds.forEach((round, index) => {
        if(index == 18){
            round.forEach((game, index) => {
                quarG += getGames(game, nick);
                quarW += getWins(game, nick);
                if(index == 0 || index == 3){
                    quarP = (quarP == 0 ? pos(game, nick, quarP) : quarP);
                }
            })
        }else if(index == 19){
            round.forEach((game, index) => {
                semiG += getGames(game, nick);
                semiW += getWins(game, nick);
                if(index == 0 || index == 5){
                    semiP = (semiP == 0 ? pos(game, nick, semiP) : semiP);
                }
            })
        }else if(index == 20){
            round.forEach((game, index) => {
                tercG += getGames(game, nick);
                tercW += getWins(game, nick);
                if(index == 0){
                    tercP = (tercP == 0 ? pos(game, nick, tercP) : tercP);
                }
            })
        }else if(index == 21){
            round.forEach((game, index) => {
                finalG += getGames(game, nick);
                finalW += getWins(game, nick);
                if(index == 0){
                    finalP = (finalP == 0 ? pos(game, nick, finalP) : finalP);
                }
            })
        }else{
            let gameAnt = 0;
            round.forEach(game => {
                games += getGames(game, nick);
                wins += getWins(game, nick);
                if(game.id % 2 == 1){
                    gameAnt = game;
                }else{
                    ks += getKs(game, gameAnt, nick);
                }
                kills += getKills(game, nick);
                farm += getFarm(game, nick);
                towers += getTowers(game, nick);
                if(game.winner != 0){
                    hist.unshift(getChamp(game, nick));
                }
            });
        }
    });
    return {
        nick: nick,
        icon: getIcon(nick),
        games: games,
        wins: wins,
        ks: ks,
        pt: getPt(wins, ks),
        kills: kills,
        farm: farm,
        towers: towers,
        mmr: getMmr(kills, farm, towers),
        hist: setHist(hist),
        quarG: quarG,
        quarW: quarW,
        quarP: quarP,
        semiG: semiG,
        semiW: semiW,
        semiP: semiP,
        tercG: tercG,
        tercW: tercW,
        tercP: tercP,
        finalG: finalG,
        finalW: finalW,
        finalP: finalP
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

function getMmr(k, f, t){
    return ((k*9)+(f*3)+(t));
}

function getChamp(game, nick){
    if(game.player1 == nick){
        return {
            champ: game.champ1,
            adv: game.champ2,
            result: game.winner == 1 ? 1 : 0
        }
    }if(game.player2 == nick){
        return {
            champ: game.champ2,
            adv: game.champ1,
            result: game.winner == 2 ? 1 : 0
        }
    }return null;
}

function setHist(hist){
    while(hist.indexOf(null) != -1){
        let pos = hist.indexOf(null);
        hist.splice(pos, 1);
    }
    return hist;
}

function pos(game, nick, q){
    if(game.player1 == nick){
        return 1;
    }if(game.player2 == nick){
        return 2;
    }
    return q;
}
function wins(player, etapa){
    let rounds = createGames();
    let wins = 0;
    rounds.forEach((round, index) => {
        if(etapa == 1){
            if(index == 18){
                round.forEach(game => {
                    if(game.player1 == player && game.winner == 1){
                        wins++;
                    }else if(game.player2 == player && game.winner == 2){
                        wins++
                    }
                });
            }
        }if(etapa == 2){
            if(index == 19){
                round.forEach(game => {
                    if(game.player1 == player && game.winner == 1){
                        wins++;
                    }else if(game.player2 == player && game.winner == 2){
                        wins++
                    }
                });
            }
        }if(etapa == 3){
            if(index == 20){
                round.forEach(game => {
                    if(game.player1 == player && game.winner == 1){
                        wins++;
                    }else if(game.player2 == player && game.winner == 2){
                        wins++
                    }
                });
            }
        }if(etapa == 4){
            if(index == 21){
                round.forEach(game => {
                    if(game.player1 == player && game.winner == 1){
                        wins++;
                    }else if(game.player2 == player && game.winner == 2){
                        wins++
                    }
                });
            }
        }
    });
    return wins;
}
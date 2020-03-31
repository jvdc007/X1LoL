let players = createPlayers();

function setBackground(){
    let body = document.querySelector('body');
    let first = getFirst();
    let champ = first.hist[0];
    champ = champ.replace('!','');
    body.style.backgroundImage = `url('../imgs/champions/${champ}.jpg')`;
}

function getFirst(){
    let m = players[0];
    players.forEach(player => {
        if(player.pt > m.pt){
            m = player;
        }
    });
    return m;
}
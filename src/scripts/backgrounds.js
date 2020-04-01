let players = createPlayers();

function setBackground(){
    let body = document.querySelector('body');
    let first = getFirst();
    let champ;
    if(first.hist[0] != ''){
        champ = first.hist[0];
    }else{
        champ = first.hist[2];
    }
    body.style.backgroundImage = `url('imgs/champions/${champ}.jpg')`;
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
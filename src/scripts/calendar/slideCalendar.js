function initCalendar(){
    let lastRound = createGames().length;
    for(let i=1; i<lastRound; i++){
        let pastRound = document.querySelector('#calendar #round'+i);
        pastRound.style.display = 'none';
    }
}

function backRound(act){
    if(act > 1){
        setCalendar(act, -1);
        return act-1;
    }else{
        return act;
    }
}

function nextRound(act, tam){
    if(act < tam){
        setCalendar(act, 1);
        return act+1;
    }else{
        return act;
    }
}

function setCalendar(act, n){
    let old = document.querySelector('#round'+act);
    let neww = document.querySelector('#round'+(act+n));
    old.style.display = 'none';
    neww.style.display = 'block';
}
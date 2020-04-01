let lastRound = createRounds().length;

function initCalendar(){
    for(let i=1; i<lastRound; i++){
        let pastRound = document.querySelector('#calendar #round'+i);
        pastRound.style.display = 'none';
    }
}

function setCalendar(act, n){
    let old = document.querySelector('#round'+act);
    let neww = document.querySelector('#round'+(act+n));
    old.style.display = 'none';
    neww.style.display = 'block';
}
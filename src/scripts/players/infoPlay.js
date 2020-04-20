function indexHistoric(hist){
    let i = 0;
    let n = 0;
    hist.forEach(champ => {
        if(champ != ''){
            n ++;
        }
        if(n < 11){
            i++;
        }
    });
    return i;
}
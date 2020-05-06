function setTable(tab){
    let clas = document.querySelector('#classification table#clas');
    let elim = document.querySelector('#classification table#elim');
    if(tab == 1){
        clas.style.display = 'table';
        elim.style.display = 'none';
    }else{
        clas.style.display = 'none';
        elim.style.display = 'table';
    }
}
function order(players){
    players.sort((a, b) => {
        if(a.pt == b.pt){
            if(a.kills == b.kills){
                if(a.farm == b.farm){
                    if(a.towers < b.towers) return 1;
                    if(a.towers > b.towers) return -1;
                }
                if(a.farm < b.farm) return 1;
                if(a.farm > b.farm) return -1;
            }
            if(a.kills < b.kills) return 1;
            if(a.kills > b.kills) return -1;
        }
        if(a.pt < b.pt) return 1;
        if(a.pt > b.pt) return -1;
        return 0;
    })
}
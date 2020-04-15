function order(players){
    players.sort((a, b) => {
        let p;
        if(a.pt == b.pt){
            if(a.kills == b.kills){
                if(a.farm == b.farm){
                    if(a.towers < b.towers) p = 1;
                    if(a.towers > b.towers) p = -1;
                }
                if(a.farm < b.farm) p = 1;
                if(a.farm > b.farm) p = -1;
            }
            if(a.kills < b.kills) p = 1;
            if(a.kills > b.kills) p = -1;
        }
        if(a.pt < b.pt) p = 1;
        if(a.pt > b.pt) p = -1;
        return p;
    })
}
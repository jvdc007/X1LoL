Vue.component('classification', {
    template:
        `<div>
            <div id='listClassification' v-for='player in players'>
                <div id='colocation'>    
                    <div id='nick'>{{player.nick}}</div>
                    <span>{{player.wins}}</span>
                    <span>{{player.game - player.wins}}</span>
                    <span>{{player.ks}}</span>
                    <span>{{player.pt}}</span>
                </div>
            </div>
        </div>`,
    data(){
        return{
            players: createPlayers(),
        }
    },
    methods: {
        pontuation(){
            for(let i = 0; i < 10; i++){
                this.players[i].pt = (this.players[i].ks * 3);
                this.players[i].pt += (this.players[i].wins - (this.players[i].ks * 2));
            }
        },
        ordenation(){
            this.players.sort((a, b) => {
                if(a.pt < b.pt) return 1;
                if(a.pt > b.pt) return -1;
                return 0;
            })
        }
    },
    mounted(){
        this.pontuation();
        this.ordenation();
        console.log(this.players);
    }
})
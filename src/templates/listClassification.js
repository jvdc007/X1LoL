Vue.component('classification', {
    template:
        `<div>
            <table id='classification'>
                <tr>    
                    <th>Player</th>
                    <th>Wins</th> 
                    <th>Loses</th> 
                    <th>KS</th> 
                    <th>PT</th> 
                </tr>
                <tr v-for='player in players'>
                    <td>{{player.nick}}</td>
                    <td>{{player.wins}}</td>
                    <td>{{player.games - player.wins}}</td>
                    <td>{{player.ks}}</td>
                    <td>{{player.pt}}</td>
                </tr>
            </table>
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
    }
})
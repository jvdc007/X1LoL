Vue.component('Classification', {
    template:
        `<div id='classification'>
            <div id='tables'>
                <button>Eliminatórias</button>
                <button>Mata-Mata</button>
            </div>
            <table>
                <tr>    
                    <th class='players'>Player</th>
                    <th class='infos'>V</th> 
                    <th class='infos'>D</th> 
                    <th class='infos'>KS</th> 
                    <th class='infos'>PT</th> 
                </tr>
                <tr v-for='player in players'>
                    <td id='player' class='players' @click='infoPlayers(player.nick)'>{{player.nick}}</td>
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
        },
        infoPlayers(chosen){
            eventBus.$emit('info', chosen);
        }
    },
    mounted(){
        this.pontuation();
        this.ordenation();
    }
})
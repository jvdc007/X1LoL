Vue.component('Classification', {
    template:
        `<div id='classification' class='component'>
            <div id='tables'>
                <button>Eliminatórias</button>
                <button>Mata-Mata</button>
            </div>
            <table>
                <tr>
                    <th class='infos'/>    
                    <th class='players'>Player</th>
                    <th class='infos'>V</th> 
                    <th class='infos'>KS</th> 
                    <th class='infos'>J</th> 
                    <th class='infos'>PT</th> 
                </tr>
                <tr v-for='(player, index) in players'>
                    <td v-bind:id="'pos'+(index+1)">{{index+1}}</td>
                    <td class='players' @click='infoPlayers(player.nick)'>{{player.nick}}</td>
                    <td>{{player.wins}}</td>
                    <td>{{player.ks}}</td>
                    <td>{{player.games}}</td>
                    <td>{{player.pt}}</td>
                </tr>
            </table>
        </div>`,
    data(){
        return{
            players: createPlayers()
        }
    },
    methods: {
        ordenation(){
            this.players.sort((a, b) => {
                if(a.pt < b.pt) return 1;
                if(a.pt > b.pt) return -1;
                return 0;
            })
        },
        background(){
            setBackground();
        },
        infoPlayers(chosen){
            eventBus.$emit('info', chosen);
        }
    },
    mounted(){
        this.ordenation();
        this.background();
    }
})
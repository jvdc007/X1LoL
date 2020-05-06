Vue.component('Classification', {
    template:
        `<div id='classification' class='component'>
            <div id='tables'>
                <button @click='setTable(1)'>Eliminatórias</button>
                <button @click='setTable(2)'>Mata-Mata</button>
            </div>
            <table id='clas'>
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
            <table id='elim'>
                <div v-for='(round, index) in rounds'>
                    <div class='etapas' v-if='index == 18'>
                        <h3>Quartas de Final</h3>
                        <div class='bord' v-if='index==0 || index==3' v-for='(game, index) in round'>
                            <span>{{game.player1}}</span>
                            <div class='results'>
                                {{wins(game.player1, 1)}}
                                <span> vs </span>
                                {{wins(game.player2, 1)}}
                            </div>
                            <span>{{game.player2}}</span>
                        </div>
                    </div>
                    <div class='etapas' v-if='index == 19'>
                        <h3>Semifinal</h3>
                        <div class='bord' v-if='index==0 || index==5' v-for='(game, index) in round'>
                            <span>{{game.player1}}</span>
                            <div class='results'>
                                {{wins(game.player1, 2)}}
                                <span> vs </span>
                                {{wins(game.player2, 2)}}
                            </div>
                            <span>{{game.player2}}</span>
                        </div>
                    </div>
                    <div class='etapas' v-if='index == 20'>
                        <h3>Terceiro Colocado</h3>
                        <div class='bord' v-if='index==0 || index==5' v-for='(game, index) in round'>
                            <span>{{game.player1}}</span>
                            <div class='results'>
                                {{wins(game.player1, 3)}}
                                <span> vs </span>
                                {{wins(game.player2, 3)}}
                            </div>
                            <span>{{game.player2}}</span>
                        </div>
                    </div>
                    <div class='etapas' v-if='index == 21'>
                        <h3>Final</h3>
                        <div class='bord' v-if='index==0 || index==7' v-for='(game, index) in round'>
                            <span>{{game.player1}}</span>
                            <div class='results'>
                                {{wins(game.player1, 4)}}
                                <span> vs </span>
                                {{wins(game.player2, 4)}}
                            </div>
                            <span>{{game.player2}}</span>
                        </div>
                    </div>
                </div>
            </table>
        </div>`,
    data(){
        return{
            players: createPlayers(),
            rounds: createGames()
        }
    },
    methods: {
        ordenation(){
            order(this.players);
        },
        background(){
            setBackground();
        },
        infoPlayers(chosen){
            eventBus.$emit('info', chosen);
        },
        wins(player, etapa){
            return wins(player, etapa);
        },
        setTable(tab){
            setTable(tab);
        }
    },
    mounted(){
        this.ordenation();
        this.background();
    }
})
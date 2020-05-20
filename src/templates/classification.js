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

                <div class='etapas'>
                    <h3>Quartas de Final</h3>
                    <div class='bord'>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.quarP == 1'>{{pl.nick}}</span>
                        </div>
                        <div class='res'>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.quarP == 1'>{{pl.quarW}}</span>
                            </div>
                            <span> vs <br> vs </span>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.quarP == 2'>{{pl.quarW}}</span>
                            </div>
                        </div>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.quarP == 2'>{{pl.nick}}</span>
                        </div>
                    </div>
                </div>
                <div class='etapas'>
                    <h3>Semifinal</h3>
                    <div class='bord'>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.semiP == 1'>{{pl.nick}}</span>
                        </div>
                        <div class='res'>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.semiP == 1'>{{pl.semiW}}</span>
                            </div>
                            <span> vs <br> vs </span>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.semiP == 2'>{{pl.semiW}}</span>
                            </div>
                        </div>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.semiP == 2'>{{pl.nick}}</span>
                        </div>
                    </div>
                </div>
                <div class='etapas'>
                    <h3>Terceiro Colocado</h3>
                    <div class='bord'>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.tercP == 1'>{{pl.nick}}</span>
                        </div>
                        <div class='res'>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.tercP == 1'>{{pl.tercW}}</span>
                            </div>
                            <span> vs </span>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.tercP == 2'>{{pl.tercW}}</span>
                            </div>
                        </div>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.tercP == 2'>{{pl.nick}}</span>
                        </div>
                    </div>
                </div>
                <div class='etapas'>
                    <h3>Final</h3>
                    <div class='bord'>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.finalP == 1'>{{pl.nick}}</span>
                        </div>
                        <div class='res'>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.finalP == 1'>{{pl.finalW}}</span>
                            </div>
                            <span> vs </span>
                            <div class='col'>
                                <span v-for='pl in players' v-if='pl.finalP == 2'>{{pl.finalW}}</span>
                            </div>
                        </div>
                        <div class='col'>
                            <span v-for='pl in players' v-if='pl.finalP == 2'>{{pl.nick}}</span>
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
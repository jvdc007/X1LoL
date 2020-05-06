Vue.component('Calendar', {
    template:
        `<div id='calendar' class='component'>
            <div v-bind:id="'round'+(index+1)" class='rounds' v-for='(round, index) in rounds'>
                <div id='navCalendar'>
                    <button @click='back'><-</button>
                    <h3 v-if='index < 18'>Rodada {{index+1}}</h3>
                    <h3 v-else-if='index == 18'>Quartas de Final</h3>
                    <h3 v-else-if='index == 19'>Semifinal</h3>
                    <h3 v-else-if='index == 20'>Terceiro Colocado</h3>
                    <h3 v-else-if='index == 21'>Final</h3>
                    <button @click='next'>-></button>
                </div>
                <div id='regular' v-if='index < 18'> 
                    <a class='games' v-for='game in round' v-if='game.id != 11' @click='getLink(game.link)'>
                        <div v-bind:class='games(game.id, 1, index)'>
                            <div v-bind:class='mold(game.free, 1)' v-if="game.champ1 != ''">
                                <img class='champs' v-if="game.champ1 != ''" v-bind:src="'imgs/champIcons/'+game.champ1+'.png'">
                            </div>
                            <div>
                                <span v-bind:class='result(game.player1, game)'>{{game.player1}}</span>
                                <div class='bans'>
                                    <img class='bansImg' v-for='ban in game.bans1' v-bind:src="'imgs/champIcons/'+ban+'.png'"/>
                                </div>
                            </div> 
                        </div>
                        <span v-bind:class='games(game.id, 0, index)'>vs</span>
                        <div v-bind:class='games(game.id, 2, index)'>
                            <div>
                                <span v-bind:class='result(game.player2, game)'>{{game.player2}}</span>
                                <div class='bans bansPlayer2'>
                                    <img class='bansImg' v-for='ban in game.bans2' v-bind:src="'imgs/champIcons/'+ban+'.png'"/>
                                </div>
                            </div>
                            <div v-bind:class='mold(game.free, 2)' v-if="game.champ2 != ''">
                                <img class='champs' v-if="game.champ2 != ''" v-bind:src="'imgs/champIcons/'+game.champ2+'.png'">
                            </div>
                        </div>
                    </a>
                    <div class='free' v-for='game in round' v-if='game.id == 11'>
                        <div class='champFree'>
                            <img class='imgFree' v-bind:src="'imgs/champIcons/'+game.ass+'.png'"/>
                            <img class='classFree' src='imgs/icons/ass.jpg'>
                        </div>
                        <div class='champFree'>
                            <img class='imgFree' v-bind:src="'imgs/champIcons/'+game.ati+'.png'"/>
                            <img class='classFree' src='imgs/icons/ati.jpg'>
                        </div>
                        <div class='champFree'>
                            <img class='imgFree' v-bind:src="'imgs/champIcons/'+game.lut+'.png'"/>
                            <img class='classFree' src='imgs/icons/lut.jpg'>
                        </div>
                        <div class='champFree'>
                            <img class='imgFree' v-bind:src="'imgs/champIcons/'+game.mag+'.png'"/>
                            <img class='classFree' src='imgs/icons/mag.jpg'>
                        </div>
                        <div class='champFree'>
                            <img class='imgFree' v-bind:src="'imgs/champIcons/'+game.sup+'.png'"/>
                            <img class='classFree' src='imgs/icons/sup.jpg'>
                        </div>
                        <div class='champFree'>
                            <img class='imgFree' v-bind:src="'imgs/champIcons/'+game.tan+'.png'"/>
                            <img class='classFree' src='imgs/icons/tan.jpg'>
                        </div>
                    </div>
                </div>
                <div class='death' v-else-if='index >= 18'>
                    <a class='games' v-for='game in round' @click='getLink(game.link)'>
                        <div v-bind:class='games(game.id, 1, index)'>

                            <div class='champPool'>
                                <div v-bind:class='moldCh(game, champ, 1)' v-if="game.champ1 != ''" v-for='champ in game.selec1'>
                                    <img class='champs' v-bind:src="'imgs/champIcons/'+champ+'.png'"/>
                                </div>
                            </div>

                            <div>
                                <span v-bind:class='result(game.player1, game)'>{{game.player1}}</span>
                                <div class='bans'>
                                    <img class='bansImg' v-for='ban in game.bans1' v-bind:src="'imgs/champIcons/'+ban+'.png'"/>
                                </div>
                            </div>

                        </div>


                        <span v-bind:class='games(game.id, 0, index)'>vs</span>


                        <div v-bind:class='games(game.id, 2, index)'>

                            <div class='nickRight'>
                                <span v-bind:class='result(game.player2, game)'>{{game.player2}}</span>
                                <div class='bans bansPlayer2'>
                                    <img class='bansImg' v-for='ban in game.bans2' v-bind:src="'imgs/champIcons/'+ban+'.png'"/>
                                </div>
                            </div>
                            
                            <div class='champPool'>
                                <div v-bind:class='moldCh(game, champ, 2)' v-if="game.champ2 != ''" v-for='champ in game.selec2'>
                                    <img class='champs' v-bind:src="'imgs/champIcons/'+champ+'.png'"/>
                                </div>  
                            </div>
                    
                        </div>
                    </a>
                </div>
            </div>
        </div>`,
    data(){
        return {
            rounds: createGames(),
            active: createGames().length,
        }
    },
    methods: {
        back(){
            this.active = backRound(this.active);
        },
        next(){
            this.active = nextRound(this.active, this.rounds.length);
        },
        mold(free, n){
            return moldFree(free, n);
        },
        moldCh(game, champ, id){
            return moldChosen(game, champ, id);
        },
        games(id, player, index){
            return gamesInRound(id, player, index);
        },
        result(player, game){
            return gameResult(player, game); 
        },
        getLink(link){
            eventBus.$emit('link', link);
        }
    },
    mounted(){
        initCalendar();
    },
})
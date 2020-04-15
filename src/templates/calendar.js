Vue.component('Calendar', {
    template:
        `<div id='calendar' class='component'>
            <div v-bind:id="'round'+(index+1)" class='rounds' v-for='(round, index) in rounds'>
                <div id='navCalendar'>
                    <button @click='back'><-</button>
                    <h3>Rodada {{index+1}}</h3>
                    <button @click='next'>-></button>
                </div>
                <div id='games'> 
                    <div class='games' v-for='game in round' v-if='game.id != 11'>
                        <div v-bind:class='games(game.id, 1)'>
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
                        <span v-bind:class='games(game.id, 0)'>vs</span>
                        <div v-bind:class='games(game.id, 2)'>
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
                    </div>
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
            </div>
        </div>`,
    data(){
        return {
            rounds: createRounds(),
            active: createRounds().length,
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
        games(id, player){
            return gamesInRound(id, player);
        },
        result(player, game){
            return gameResult(player, game); 
        }
    },
    mounted(){
        initCalendar();
    },
})
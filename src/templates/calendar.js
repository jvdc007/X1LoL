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
                    <div class='games' v-for='game in round'>
                        <div class='player1'>
                            <div v-bind:class='mold1(game.free)' v-if="game.champ1 != ''">
                                <img class='champs' v-if="game.champ1 != ''" v-bind:src="'imgs/champIcons/'+game.champ1+'.png'">
                            </div>
                            <span class='nick'>{{game.player1}}</span> 
                        </div>
                        <span class='vs'>vs</span>
                        <div class='player2'>
                            <span class='nick'>{{game.player2}}</span>
                            <div v-bind:class='mold2(game.free)' v-if="game.champ2 != ''">
                                <img class='champs' v-if="game.champ2 != ''" v-bind:src="'imgs/champIcons/'+game.champ2+'.png'">
                            </div>
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
            if(this.active > 1){
                setCalendar(this.active, -1);
                this.active--
            }else{
                return;
            }
        },
        next(){
            if(this.active < this.rounds.length){
                setCalendar(this.active, 1);
                this.active++
            }else{
                return;
            }
        },
        mold1(free){
            if(free == 3 || free == 1){
                return 'mold moldF';
            }else{
                return 'mold';
            }
        },
        mold2(free){
            if(free == 3 || free == 2){
                return 'mold moldF';
            }else{
                return 'mold';
            }
        }
    },
    mounted(){
        initCalendar();
    },
})
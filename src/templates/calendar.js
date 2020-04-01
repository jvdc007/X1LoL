Vue.component('Calendar', {
    template:
        `<div id='calendar' class='component'>
            <div v-bind:id="'round'+(index+1)" class='rounds' v-for='(round, index) in rounds'>
                Rodada {{index+1}}
                <div class='games' v-for='game in round'>
                    {{game.player1}} ({{game.champ1}}) vs {{game.player2}} ({{game.champ2}})
                </div>
                <div id='navCalendar'>
                    <button @click='back'><-</button>
                    <button @click='next'>-></button>
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
        }
    },
    mounted(){
        initCalendar();
    },
})
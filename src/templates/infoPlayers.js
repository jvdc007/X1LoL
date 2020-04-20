Vue.component('InfoPlayers', {
    template:
        `<div id='infoPlayers' class='component'>
            <div id='info' v-if="chosen != ''">
                <div id='mainInfo'>
                    <img id='icon' v-bind:src='info.icon' />
                    <div id='main'>
                        <span id='nick'>{{info.nick}}</span>
                        <div id='forms'>
                            <div>
                                <img src='imgs/icons/kill.png' alt='Kills'/><span v-text='info.kills'/>
                            </div>
                            <div>
                                <img src='imgs/icons/farm.png' alt='Farm'/><span v-text='info.farm'/>
                            </div>
                            <div>
                                <img src='imgs/icons/tower.png' alt='Towers'/><span v-text='info.towers'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='historic'>
                    <div v-for='(champ, index) in info.hist'>
                        <div v-if="index < indexHist ">
                            {{champ}}
                        </div>
                    </div>
                </div>
            </div>
            <div id='infoChamps' v-else>Clique em um jogador para ver suas estatísticas!</div>
        </div>`,
    data(){
        return {
            players: createPlayers(),
            chosen: '',
            info: {},
            indexHist: 0
        }
    },
    methods: {
        findPlayer(){
            for(let i = 0; i < 10; i++){
                if(this.players[i].nick == this.chosen){
                    this.info = this.players[i];
                }
            }
        }
    },
    beforeCreate(){
        eventBus.$on('info', (chosen) => {
            this.chosen = chosen;
        })
    },
    beforeUpdate(){
        this.findPlayer();
        this.indexHist = indexHistoric(this.info.hist);
    }
})
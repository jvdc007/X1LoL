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
                    <span>Histórico</span>
                    <div v-for='(confront, index) in info.hist'>
                        <div class='confronts'>
                            <img v-bind:class='mold(confront)' v-bind:src="'imgs/champIcons/'+confront.champ+'.png'"/>
                            vs
                            <img class='imgAdv' v-bind:src="'imgs/champIcons/'+confront.adv+'.png'"/>
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
        }
    },
    methods: {
        findPlayer(){
            for(let i = 0; i < 10; i++){
                if(this.players[i].nick == this.chosen){
                    this.info = this.players[i];
                }
            }
        },
        mold(conf){
            return winnerOrLoser(conf);
        }
    },
    beforeCreate(){
        eventBus.$on('info', (chosen) => {
            this.chosen = chosen;
        })
    },
    beforeUpdate(){
        this.findPlayer();
    }
})
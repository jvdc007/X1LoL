Vue.component('InfoPlayers', {
    template:
        `<div id='infoPlayers'>
            <div id='infoHeader' v-if="chosen != ''">
                <img id='icon' v-bind:src='info.icon' />
                <div id='mainInfo'>
                    <span id='nick'>{{info.nick}}</span>
                    <div>
                        <span>Kill</span>
                        <span>Farm</span>
                        <span>Tower</span>
                    </div>
                </div>
            </div>
            <div v-else>Clique em um jogador para ver suas estatísticas!</div>
        </div>`,
    data(){
        return {
            players: createPlayers(),
            chosen: '',
            info: {}
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
    }
})
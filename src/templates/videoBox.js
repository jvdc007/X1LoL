Vue.component('VideoBox', {
    template:
        `<div id='videoBox' class='component'>
            <iframe v-bind:src="link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`,
    data(){
        return{
            link: ''
        }
    },
    beforeCreate(){
        eventBus.$on('link', (link) => {
            console.log(this.link)
            this.link = link;
        })
    },
})
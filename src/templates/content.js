Vue.component('Content', {
    template:
        `<div id='content'>
            <div id='left'>
                <Classification/>
                <InfoPlayers/>
            </div>
            <div id='center'>
                <Calendar/>
            </div>
            <div id='right'>
                <VideoBox/>
            </div>
        </div>`,
})
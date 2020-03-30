const app = new Vue({
    el: '#app',
    template:
        `<div id='app'>
            <Header/>
            <div id='content'>
                <div class='container'>
                    <Classification/>
                    <InfoPlayers/>
                </div>
            </div>
        </div>`
});
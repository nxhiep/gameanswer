class BasicGameView {
    constructor(gameObjects){
        this.mainPanel = document.createElement('div');
        this.mainPanel.className = 'basic-core-view-main-panel';
        this.gameObjects = gameObjects;
        this.onReset();
        this.mapGameCore = {};
        this.mapIndexGameObject = {};
        for(let gameObject of this.gameObjects){
            this.mapIndexGameObject[gameObject.index] = gameObject;
            let gameCore = new BasicGameCore(gameObject);
            this.mapGameCore[gameObject.id] = gameCore;
            this.mainPanel.appendChild(gameCore.getGameViewPanel());
        }
        this.onStart();
    }

    asWidget() {
        return this.mainPanel;
    }

    onReset() {
        this.mainPanel.innerHTML = "";
    }

    onStart(){
        this.timer = setInterval(this.onTickTack, 1000);
        
    }

    onTickTack() {
        
    }
}
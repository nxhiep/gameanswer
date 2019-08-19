class BasicGameCore { // xử lý ở question hiện tại
    constructor(gameObject){
        this.gameViewPanel = null;
        if(gameObject instanceof QuizGameObject){
            let quizGameView = new QuizGameView(gameObject);
            this.gameViewPanel = quizGameView.asWidget();
            quizGameView.addHandlerAnswerCallback((answer, i, value) => {
                console.log(answer, i, value);
                this.onAnswer();
            });
        }
    }

    getGameViewPanel() {
        return this.gameViewPanel;
    }

    onAnswer() {
        
    }
}
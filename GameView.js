class GameView {
    constructor(gameObject){
        this.chars = ['A', 'B', 'C', 'D', 'E', 'F'];
        this.mainPanel = document.createElement('div');
        this.mainPanel.className = 'game-view-main-panel';
        this.headerPanel = document.createElement('div');
        this.headerPanel.className = 'game-view-header-panel';
        this.bodyPanel = document.createElement('div');
        this.bodyPanel.className = 'game-view-body-panel';
        this.footerPanel = document.createElement('div');
        this.footerPanel.className = 'game-view-footer-panel';
        this.mainPanel.appendChild(this.headerPanel);
        this.mainPanel.appendChild(this.bodyPanel);
        this.mainPanel.appendChild(this.footerPanel);
        this.showQuestion(gameObject.question, gameObject.index);
        this.showAnswers(gameObject.answers, gameObject.id);
    }

    asWidget() {
        return this.mainPanel;
    }

    showQuestion(question, index){
    }

    showAnswers(answers, questionId){
    }

    addHandlerAnswerCallback(callback) {
        this.answerCallback = callback;
    }
}
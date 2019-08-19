class QuizGameView extends GameView {
    constructor(gameObject){
        super(gameObject);
    }

    showQuestion(question, index) {
        let questionPanel = document.createElement('div');
        questionPanel.className = 'flex flex-v-top';
        let indexPanel = document.createElement('div');
        indexPanel.innerHTML = '<strong>Câu: ' + (index + 1) + '</strong>';
        indexPanel.style.width = '50px';
        questionPanel.appendChild(indexPanel);
        let contentPanel = document.createElement('div');
        contentPanel.innerHTML = question.text;
        contentPanel.style.width = 'calc(100% - 50px)';
        questionPanel.appendChild(contentPanel);
        this.headerPanel.appendChild(questionPanel);
    }

    showAnswers(answers, questionId) {
        let answersPanel = document.createElement('div');
        answersPanel.className = 'flex flex-column';
        for(let i = 0; i < answers.length; i++){
            let answer = answers[i];
            let answerPanel = document.createElement('div');
            answerPanel.className = 'flex flex-v-top';
            let checkBox = document.createElement('input');
            checkBox.type = 'radio';
            checkBox.name = 'radio-question-' + questionId;
            let idAnswer = 'answer-' + i + '-' + questionId;
            checkBox.setAttribute('id', idAnswer)
            let cPanel = document.createElement('label');
            cPanel.innerHTML = answer.text;

            answerPanel.appendChild(checkBox);

            let charPanel = document.createElement('label');
            charPanel.innerHTML = '&nbsp;'+this.chars[i]+'.&nbsp;';
            answerPanel.appendChild(charPanel);
            charPanel.setAttribute('for', idAnswer);
            
            cPanel.setAttribute('for', idAnswer);

            answerPanel.appendChild(cPanel);
            answersPanel.appendChild(answerPanel);
            checkBox.onchange = () => {
                this.answerCallback && this.answerCallback(answer, i, answer.cardId != Config.NULL_NUMBER);
            };
        }
        this.bodyPanel.appendChild(answersPanel);
    }
}
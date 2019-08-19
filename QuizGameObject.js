class QuizGameObject extends GameObject {
    constructor(index, card){
        super(index, card);
        this.question = new Face(card.id, card.frontText, card.frontHint, Config.FACE_FRONT, Config.GAME_QUIZ, index);
        this.answers = this.getAnswersFace(card, Config.GAME_QUIZ);
    }

    getAnswersFace(card, gameType) {
        let answers = [];
        if(card.backText){
            answers.push(new Face(card.id, card.backText, card.backHint, Config.FACE_BACK, gameType));
            this.numberCorrectAnswer = 1;
        } else if(card.backTexts && card.backTexts.length > 0){
            card.backTexts.forEach(backText => {
                answers.push(new Face(card.id, backText, card.backHint, Config.FACE_BACK, gameType));
                this.numberCorrectAnswer++;
            });
        }
        if(card.multiChoices && card.multiChoices.length > 0) {
            card.multiChoices.forEach(choice => {
                answers.push(new Face(Config.NULL_NUMBER, choice, '', Config.FACE_BACK, gameType));
            });
        }
        // shuffleAnswer(card); // TODO
        return answers;
    }
}
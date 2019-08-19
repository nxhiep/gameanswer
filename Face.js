class Face {
    constructor(cardId, text, hint, faceType, questionType, index){
        this.cardId = cardId;
        this.questionType = questionType;
        this.faceType = faceType;
        this.text = text;
        this.hint = hint;
        this.index = index ? index : 0;
    }
}
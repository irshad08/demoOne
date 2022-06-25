import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    correctAnswers=0
    myQuestions=[
        {
            id:"Question1",
            question:"Which",
            answers:{
                a:"A",
                b:"B",
                c:"C"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which",
            answers:{
                a:"A",
                b:"B",
                c:"C"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which",
            answers:{
                a:"A",
                b:"B",
                c:"C"
            },
            correctAnswer:"a"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    changeHandler(event){
        const {name, value}= event.target
        this.selected={...this.selected, [name]:value}
    }
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id]=== item.correctAnswer)
        this.correctAnswers = correct.lenth
    }
    resetHandler(){
        this.selected= {}
        this.correctAnswers = 0
    }
}
import { LightningElement, track } from 'lwc';

export default class LwcOne extends LightningElement {
    fullname = "Hero"

    @track
    address={
        city:'Hyderabad',
        postcode:500019,
        country:'India'
    }
    changeHandler(event){
        // this.address={...this.address, "city":event.target.value} // without @track
        this.address.city=event.target.value
    }

    users = ["Irshad", "Reyan"]
    num1 = 10
    num2 = 20
    get firstUser(){
        return this.users[1].toUpperCase()
    }
    get multiply(){
        return this.num1*this.num2
    }

} 
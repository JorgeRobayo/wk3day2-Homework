// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

// class Cats {
//     constructor(name, furColor, foodPreference){
//         this.name = name
//         this.furColor = furColor
//         this.foodPreference = foodPreference
//     }

//     catAction(catActionInput){
//         console.log(`${this.name} is ${catActionInput} at this moment`)
//     }

//     catSays(catSaysInput){
//         console.log(`${catSaysInput}`)
//     }

//     catMood(catMoodInput){
//         console.log(`${this.name} is feeling ${catMoodInput}`)
//     }

// }

// const talkingCat1 = new Cats ('Luna', 'Black and White', 'Sardines')
// console.log(talkingCat1)
// talkingCat1.catAction('Playing with a toy')
// talkingCat1.catSays('I am having a lot of fun, you should try it!')
// talkingCat1.catMood('Very happy')

// const talkingCat2 = new Cats ('Milo', 'Orange and black', 'Salmon')
// console.log(talkingCat2)
// talkingCat2.catAction('Sleeping')
// talkingCat2.catSays('ZZZZZZZZZZZZZZ')
// talkingCat2.catMood('Tired')

//======================================================================

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
    constructor(name, weapon, parrotName){
        this.name = name
        this.weapon = weapon
        this.parrotName = parrotName
    }

    attack(attackInput){
        console.log(`${this.name} attacked you with his ${this.weapon}!`)
    }

    pirateAction

}
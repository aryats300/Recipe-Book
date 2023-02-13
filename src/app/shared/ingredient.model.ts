export class Ingredient {
    constructor(public name: string, public amount: number) {}
    /*Shortcut way -automatically gives us properties with the 
    names we specify here as argument names and assign the the 
    values we receive in the constructor to these newly created properties*/
}
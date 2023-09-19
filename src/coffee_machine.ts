import { DrinkMaker } from './drink_maker'

export class CoffeeMachine {
    private sugar_quantity = 0

    constructor(private drinkMaker: DrinkMaker) { }

    makeCoffee() {
        if (this.sugar_quantity) {
            this.drinkMaker.execute(`C:${this.sugar_quantity}:0`)
        }
        this.drinkMaker.execute('C::')
    }

    makeTea() {
        if (this.sugar_quantity) {
            this.drinkMaker.execute(`T:${this.sugar_quantity}:0`)
        }
        this.drinkMaker.execute('T::')
    }

    makeChocolate() {
        if (this.sugar_quantity) {
            this.drinkMaker.execute(`H:${this.sugar_quantity}:0`)
        }
        this.drinkMaker.execute('H::')
    }

    addSugar() {
        if (this.sugar_quantity === 2) {
            return
        }

        this.sugar_quantity++
    }
}
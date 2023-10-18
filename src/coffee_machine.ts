import { DrinkMaker } from './drink_maker'

export class CoffeeMachine {
    private sugar_quantity = 0
    private money_cents = 0

    constructor(private drinkMaker: DrinkMaker) { }

    addMoney(money_cents: number) {
        this.money_cents = money_cents
    }

    makeCoffee() {
        if (this.money_cents) {
            this.drinkMaker.execute(`M:${(60 - this.money_cents) / 100} euros missing`)
            return
        }

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
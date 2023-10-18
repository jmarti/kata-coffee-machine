import { DrinkMaker } from './drink_maker'

export type Prices = {
    coffee: number
    tea: number
    chocolate: number
}

enum Drink {
    coffee = 'coffee',
    tea = 'tea',
    chocolate = 'chocolate'
}

export class CoffeeMachine {
    private sugar_quantity = 0
    private money_cents = 0

    constructor(
        private drinkMaker: DrinkMaker,
        private prices: Prices
    ) { }

    setMoney(money_cents: number) {
        this.money_cents = money_cents
    }
    
    isEnoughMoney(drink: Drink): boolean {
        return this.money_cents >= this.prices[drink]
    }

    makeCoffee() {
        if (!this.isEnoughMoney(Drink.coffee)) {
            this.sendMessage(`${(this.prices.coffee - this.money_cents) / 100} euros missing`)
            return
        }

        if (this.sugar_quantity) {
            this.drinkMaker.execute(`C:${this.sugar_quantity}:0`)
        }

        this.drinkMaker.execute('C::')
    }

    makeTea() {
        if (!this.isEnoughMoney(Drink.tea)) {
            this.sendMessage(`${(this.prices.tea - this.money_cents) / 100} euros missing`)
            return
        }

        if (this.sugar_quantity) {
            this.drinkMaker.execute(`T:${this.sugar_quantity}:0`)
        }
        this.drinkMaker.execute('T::')
    }

    makeChocolate() {
        if (!this.isEnoughMoney(Drink.chocolate)) {
            this.sendMessage(`${(this.prices.chocolate - this.money_cents) / 100} euros missing`)
            return
        }

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

    sendMessage(message: string) {
        this.drinkMaker.execute(`M:${message}`)
    }
}
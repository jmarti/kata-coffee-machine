export class DrinkMaker {

    private sugar_quantity = 0

    makeCoffee() {
        if (this.sugar_quantity) {
            this.execute(`C:${this.sugar_quantity}:0`)
        }
        this.execute('C::')
    }

    makeTea() {
        if (this.sugar_quantity) {
            this.execute(`T:${this.sugar_quantity}:0`)
        }
        this.execute('T::')
    }

    makeChocolate() {
        if (this.sugar_quantity) {
            this.execute(`H:${this.sugar_quantity}:0`)
        }
        this.execute('H::')
    }

    addSugar() {
        this.sugar_quantity++
    }
    
    
    execute(command: any) {
      // Calling this method sends the command into the Drink Maker.
      // You don't have to implement it
    }
}
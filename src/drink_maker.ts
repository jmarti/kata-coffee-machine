export class DrinkMaker {

    private sugar_quantity = 0

    makeCoffee() {
        if (this.sugar_quantity) {
            this.execute('C:1:0')
        }
        this.execute('C::')
    }

    makeTea() {
        if (this.sugar_quantity) {
            this.execute('T:1:0')
        }
        this.execute('T::')
    }

    makeChocolate() {
        if (this.sugar_quantity) {
            this.execute('H:1:0')
        }
        this.execute('H::')
    }

    addSugar() {
        this.sugar_quantity = 1
    }
    
    
    execute(command: any) {
      // Calling this method sends the command into the Drink Maker.
      // You don't have to implement it
    }
}
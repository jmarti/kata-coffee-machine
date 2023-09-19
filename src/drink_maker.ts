export class DrinkMaker {

    private sugar_quantity = 0

    makeCoffee() {
        this.execute('C::')
    }

    makeTea() {
        this.execute('T::')
    }

    makeChocolate() {
        this.execute('H::')
    }
    
    execute(command: any) {
      // Calling this method sends the command into the Drink Maker.
      // You don't have to implement it
    }
}
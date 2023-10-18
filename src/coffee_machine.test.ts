import { SpyInstance, beforeEach, describe, expect, test, vi } from 'vitest'
import { DrinkMaker } from './drink_maker'
import { CoffeeMachine } from './coffee_machine'

describe(`Drink maker can make drinks`, () => {
    let coffeeMachine: CoffeeMachine
    let executeSpy: SpyInstance

    beforeEach(() => {
        const drinkMaker = new DrinkMaker()
        coffeeMachine = new CoffeeMachine(drinkMaker)
        executeSpy = vi.spyOn(drinkMaker, 'execute')
    })

    test(`Makes coffee`, () => {
        coffeeMachine.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('C::')
    })

    test(`Makes tea`, () => {
        coffeeMachine.makeTea()
    
        expect(executeSpy).toHaveBeenCalledWith('T::')
    })

    test(`Makes chocolate`, () => {
        coffeeMachine.makeChocolate()
    
        expect(executeSpy).toHaveBeenCalledWith('H::')
    })

    test(`Makes coffee with one sugar and one stick`, () => {
        coffeeMachine.addSugar()
        coffeeMachine.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('C:1:0')
    })

    test(`Makes tea with one sugar and one stick`, () => {
        coffeeMachine.addSugar()
        coffeeMachine.makeTea()

        expect(executeSpy).toHaveBeenCalledWith('T:1:0')
    })

    test(`Makes chocolate with one sugar and one stick`, () => {
        coffeeMachine.addSugar()
        coffeeMachine.makeChocolate()

        expect(executeSpy).toHaveBeenCalledWith('H:1:0')
    })

    test(`Makes coffee with two sugars and one stick`, () => {
        coffeeMachine.addSugar()
        coffeeMachine.addSugar()
        coffeeMachine.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('C:2:0')
    })

    test(`Makes tea with two sugars and one stick`, () => {
        coffeeMachine.addSugar()
        coffeeMachine.addSugar()
        coffeeMachine.makeTea()

        expect(executeSpy).toHaveBeenCalledWith('T:2:0')
    })

    test(`Makes chocolate with two sugars and one stick`, () => {
        coffeeMachine.addSugar()
        coffeeMachine.addSugar()
        coffeeMachine.makeChocolate()

        expect(executeSpy).toHaveBeenCalledWith('H:2:0')
    })

    test(`Can't make a drink with more than two sugars`, () => {
        coffeeMachine.addSugar()
        coffeeMachine.addSugar()
        coffeeMachine.addSugar()
        coffeeMachine.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('C:2:0')
    })

    test(`Can't make a coffe with not enough money`, () => {
        const moneyCents = 59
        
        coffeeMachine.addMoney(moneyCents)
        coffeeMachine.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('M:0.01 euros missing')
    })
})
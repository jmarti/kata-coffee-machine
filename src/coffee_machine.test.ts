import { SpyInstance, beforeEach, describe, expect, test, vi } from 'vitest'
import { DrinkMaker } from './drink_maker'
import { CoffeeMachine } from './coffee_machine'
import type { Prices } from './coffee_machine'

const PRICES: Prices = {
    coffee: 60,
    tea: 40,
    chocolate: 50
}

describe(`Coffee machine functionality`, () => {
    let coffeeMachine: CoffeeMachine
    let executeSpy: SpyInstance

    beforeEach(() => {
        const drinkMaker = new DrinkMaker()
        coffeeMachine = new CoffeeMachine(drinkMaker, PRICES)
        executeSpy = vi.spyOn(drinkMaker, 'execute')
    })

    describe(`Can makes beverages`, () => {
        test(`Makes coffee`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.makeCoffee()
    
            expect(executeSpy).toHaveBeenCalledWith('C::')
        })
    
        test(`Makes tea`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.makeTea()
        
            expect(executeSpy).toHaveBeenCalledWith('T::')
        })
    
        test(`Makes chocolate`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.makeChocolate()
        
            expect(executeSpy).toHaveBeenCalledWith('H::')
        })
    })
    

    describe(`Can manage sugar and sticks when required`, () => {
        test(`Makes coffee with one sugar and one stick`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.addSugar()
            coffeeMachine.makeCoffee()
    
            expect(executeSpy).toHaveBeenCalledWith('C:1:0')
        })
    
        test(`Makes tea with one sugar and one stick`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.addSugar()
            coffeeMachine.makeTea()
    
            expect(executeSpy).toHaveBeenCalledWith('T:1:0')
        })
    
        test(`Makes chocolate with one sugar and one stick`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.addSugar()
            coffeeMachine.makeChocolate()
    
            expect(executeSpy).toHaveBeenCalledWith('H:1:0')
        })
    
        test(`Makes coffee with two sugars and one stick`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.addSugar()
            coffeeMachine.addSugar()
            coffeeMachine.makeCoffee()
    
            expect(executeSpy).toHaveBeenCalledWith('C:2:0')
        })
    
        test(`Makes tea with two sugars and one stick`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.addSugar()
            coffeeMachine.addSugar()
            coffeeMachine.makeTea()
    
            expect(executeSpy).toHaveBeenCalledWith('T:2:0')
        })
    
        test(`Makes chocolate with two sugars and one stick`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.addSugar()
            coffeeMachine.addSugar()
            coffeeMachine.makeChocolate()
    
            expect(executeSpy).toHaveBeenCalledWith('H:2:0')
        })
    
        test(`Can't make a drink with more than two sugars`, () => {
            coffeeMachine.setMoney(Infinity)
            coffeeMachine.addSugar()
            coffeeMachine.addSugar()
            coffeeMachine.addSugar()
            coffeeMachine.makeCoffee()
    
            expect(executeSpy).toHaveBeenCalledWith('C:2:0')
        })
    })

    describe(`Can manage money`, () => {
        test(`Can't make a coffe with not enough money`, () => {
            const moneyCents = PRICES.coffee - 1
            
            coffeeMachine.setMoney(moneyCents)
            coffeeMachine.makeCoffee()
    
            expect(executeSpy).toHaveBeenCalledWith('M:0.01 euros missing')
        })
    
        test(`Makes a coffe with enough money`, () => {
            const moneyCents = PRICES.coffee
            
            coffeeMachine.setMoney(moneyCents)
            coffeeMachine.makeCoffee()
    
            expect(executeSpy).toHaveBeenCalledWith('C::')
        })
    
        test(`Can't make a tea with not enough money`, () => {
            const moneyCents = PRICES.tea - 1
            
            coffeeMachine.setMoney(moneyCents)
            coffeeMachine.makeTea()
    
            expect(executeSpy).toHaveBeenCalledWith('M:0.01 euros missing')
        })
    
        test(`Makes a tea with enough money`, () => {
            const moneyCents = PRICES.tea
            
            coffeeMachine.setMoney(moneyCents)
            coffeeMachine.makeTea()
    
            expect(executeSpy).toHaveBeenCalledWith('T::')
        })
    
        test(`Can't make a chocolate with not enough money`, () => {
            const moneyCents = PRICES.chocolate - 1
            
            coffeeMachine.setMoney(moneyCents)
            coffeeMachine.makeChocolate()
    
            expect(executeSpy).toHaveBeenCalledWith('M:0.01 euros missing')
        })
    
        test(`Makes a chocolate with enough money`, () => {
            const moneyCents = PRICES.tea
            
            coffeeMachine.setMoney(moneyCents)
            coffeeMachine.makeTea()
    
            expect(executeSpy).toHaveBeenCalledWith('T::')
        })
    })
})
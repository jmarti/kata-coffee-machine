import { beforeEach, describe, expect, test, vi } from 'vitest'
import { DrinkMaker } from './drink_maker'

describe(`Drink maker can make drinks`, () => {
    let drinkMaker: DrinkMaker
    let executeSpy: any
    beforeEach(() => {
        drinkMaker = new DrinkMaker()
        executeSpy = vi.spyOn(drinkMaker, 'execute')
    })
    test(`Makes coffee`, () => {
        drinkMaker.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('C::')
    })

    test(`Makes tea`, () => {
        drinkMaker.makeTea()
    
        expect(executeSpy).toHaveBeenCalledWith('T::')
    })

    test(`Makes chocolate`, () => {
        drinkMaker.makeChocolate()
    
        expect(executeSpy).toHaveBeenCalledWith('H::')
    })

    test(`Makes coffee with one sugar and one stick`, () => {
        drinkMaker.addSugar()
        drinkMaker.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('C:1:0')
    })

    test(`Makes tea with one sugar and one stick`, () => {
        drinkMaker.addSugar()
        drinkMaker.makeTea()

        expect(executeSpy).toHaveBeenCalledWith('T:1:0')
    })

    test(`Makes chocolate with one sugar and one stick`, () => {
        drinkMaker.addSugar()
        drinkMaker.makeChocolate()

        expect(executeSpy).toHaveBeenCalledWith('H:1:0')
    })

    test(`Makes coffee with two sugars and one stick`, () => {
        drinkMaker.addSugar()
        drinkMaker.addSugar()
        drinkMaker.makeCoffee()

        expect(executeSpy).toHaveBeenCalledWith('C:2:0')
    })

    test(`Makes tea with two sugars and one stick`, () => {
        drinkMaker.addSugar()
        drinkMaker.addSugar()
        drinkMaker.makeTea()

        expect(executeSpy).toHaveBeenCalledWith('T:2:0')
    })

    test(`Makes chocolate with two sugars and one stick`, () => {
        drinkMaker.addSugar()
        drinkMaker.addSugar()
        drinkMaker.makeChocolate()

        expect(executeSpy).toHaveBeenCalledWith('H:2:0')
    })
})
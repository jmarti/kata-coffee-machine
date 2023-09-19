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
})
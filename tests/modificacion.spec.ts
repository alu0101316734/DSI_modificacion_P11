import "mocha"
import { expect } from "chai"
import {add} from '../src/modificacion.js'

describe('Modifiacion',() =>{
    it('Probamos si funciona',() =>{
        expect(add(2,7)).to.be.equal(9)
    })
})
import {makeAutoObservable} from 'mobx'

export default class BasketStore {
    
        basket =[]

        constructor() {
            makeAutoObservable(this) 
    }

    setDevice(device) {
        this.basket.push(device)
    }
    removeDevice(id) {
        this.basket = this.basket.filter(device => device.id != id)
    }

    get device() {
        return this.basket
    }
}

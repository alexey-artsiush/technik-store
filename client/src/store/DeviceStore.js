import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this) 


        this._types = [
            {id:1, name: 'Холодильник'},
            {id:2, name: 'Смартфоны'},
            {id:3, name: 'Ноутбуки'},
            {id:4, name: 'Телевизоры'},
        ]
           
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
            {id:3, name: 'Lenovo'},
            {id:4, name: 'Asus'},
        ]

        this._devices = [
            {id: 1, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 2, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 3, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 4, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 5, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 6, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 7, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 8, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},
            {id: 9, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'},

        ]
       
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
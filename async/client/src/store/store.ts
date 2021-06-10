import { Car } from "../components/car/car";
import { IStore, IOptions, Options } from "../types";


class Store implements IStore {
  _cars: Car[];
  _winners: Car[];
  options: IOptions;

  constructor () {
    this._cars = [];
    this._winners = [];
    this.options = {
      garage: {
        page: 1,
        allPage: 1
      },
      winners: {
        page: 1,
        allPage: 1
      }
    }
  }

  get cars() {
    return this._cars;
  }

  set cars(arrayCars) {
    this._cars = arrayCars;
  }

  get winners() {
    return this._winners;
  }

  getOptions(section: Options) {
    if (section === Options.GARAGE) {
      return this.options.garage;
    }

    if (section === Options.WINNERS) {
      return this.options.winners;
    }
  }

  addCar(car: Car) {
    this.cars.push(car);
    
  }

  deleteCar(id: string) {
    const index = this.cars.findIndex(car => car.id === id);
    return this.cars.splice(index, 1);
  }

  getCar(id: string) {

    const car =  this.cars.find(car => car.id === id);

    if (car) {
      return car;
    }
    console.log('Car has not been found');
  }
  
}

export const store = new Store();
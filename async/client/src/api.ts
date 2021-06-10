import { BtnGarage } from "./components/btnGarage/btnGarage";
import { Garage } from "../src/modules/garage/garage";
import { Winners } from "../src/modules/winners/winners";
import { btnWinners } from "./components/btnWinners/btnWinners";
import { Wrapper } from "./components/wrapper/wrapper";
import { Car } from "./components/car/car";
import { store } from './store/store';
import { database } from './services/database';

export class Api {
  private readonly btnGarage: BtnGarage;
  private readonly btnWinners: btnWinners;
  private readonly wrapper: Wrapper;
  private readonly garage: Garage;
  private readonly winners: Winners;

  constructor(private readonly rootElement: HTMLElement) {
    this.btnGarage = new BtnGarage();
    this.btnWinners = new btnWinners();
    this.wrapper = new Wrapper();
    this.garage = new Garage();
    this.winners = new Winners();

    this.rootElement.append(
      this.btnGarage.element,
      this.btnWinners.element,
      this.wrapper.element
    );

    this.wrapper.element.append(this.garage.element);
    console.log('this.garage.element', this.garage.element);

    // обработчик на главные кнопки
    const btnGarageHref = document.getElementById("garageId");
    btnGarageHref?.classList.add("active-btn");

    btnGarageHref?.addEventListener("click", () => {
      btnGarageHref.classList.add("active-btn");
      btnWinnersHref?.classList.remove("active-btn");
      this.winners.element.remove();
      this.wrapper.element.append(this.garage.element);

      const car1 = new Car('1', 'Audi', 'blue');
      const car2 = new Car('2', "Ford", 'yellow');

      store.addCar(car1);
      store.addCar(car2);
      this.garage.toStart();

    });

    const btnWinnersHref = document.getElementById("winnersId");

    btnWinnersHref?.addEventListener("click", () => {
      btnGarageHref?.classList.remove("active-btn");
      btnWinnersHref.classList.add("active-btn");
      this.garage.element.remove();
      this.wrapper.element.append(this.winners.element);
    });

    // обработчик на кнопки A и B
    const btnA = document.querySelector(".car-a");
    btnA?.classList.add("car-btn-active");
    btnA?.addEventListener("click", () => {
      btnB?.classList.remove("car-btn-active");
      btnA.classList.add("car-btn-active");

    });

    const btnB = document.querySelector(".car-b");
    btnB?.addEventListener("click", () => {
      btnA?.classList.remove("car-btn-active");
      btnB.classList.add("car-btn-active");
    });

    // обработчик на изменение цвета, кнопка CREATE
    const colorInput = document.getElementById("input-color");
    const createBtn = document.getElementById("create-input");
    createBtn?.addEventListener("click", () => {
      // createBtn.classList.add("active-btn");

      const color = (colorInput as HTMLInputElement).value;
      console.log(color);
      const car = store.getCar('1');
      console.log('car', car);
      if (car) {
        car.color = color;
      }  
    });
  }

  async start(): Promise<void> {
    // const res = await fetch('./images.json');
    // const categories: ImageCategoryModel[] = await res.json();
    // const cat = categories[0];
    // const images = cat.images.map((name) => ${cat.category}/${name});
    // this.game.newGame(images);
    // this.timer.countTime(); // запускаем таймер
  }

  async init() {
    store.cars = await database.getCars();
    // database.getCars().then(data => {
    //   store.cars = data;
    // })
  }
}

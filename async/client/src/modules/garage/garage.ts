import "./garage.scss";
import { BaseComponent } from "../../components/base-component";
import { Car } from "../../components/car/car";
import { store } from '../../store/store';
import { Options } from '../../types'; 

const cars  = store.cars;

const options = store.getOptions(Options.GARAGE);

export class Garage extends BaseComponent {
  field: any;

  constructor() {
    super("div", ["wrapper-garage"]);

    this.render();
  }

  render() {
    this.element.innerHTML = this.html();
    this.field = this.element.querySelector('.field');
  }

  toStart() {
    this.field.innerHTML = '';
    cars.forEach(car => {
      this.field.append(car.element);
    })
  }

  html() {
    return `
      <div class="car-create">
      <form> 
        <input type="text" size="40">
        <input id="input-color" type="color" name="bg" >
      </form>
      <button id="create-input">create</button>
      </div>

      <div class="car-update">
      <form> 
        <input type="text" size="40">
        <input type="color" name="bg">
      </form>
      <button id="update-input">update</button>
      </div>

      <div class="car-btn">
      <button>race</button>
      <button>reset</button>
      <button id="generate-input">generate cars</button>
      </div>
      <span>Garage (     <span id="garage-count">0</span>     )     </span>

      <div>Page #    <span id="garage-count-page">1</span>      </div>

      <button id="car-select">select</button>
      <button id="car-remove">remove</button>
      <div id="car-name"></div>
      <button class="car-a">A</button>
      <button class="car-b">B</button>
      <div class="field"></div>
    `;
  }
}

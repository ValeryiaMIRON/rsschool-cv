import "./btnWinners.scss";
import { BaseComponent } from "../base-component";
export class btnWinners extends BaseComponent {
  constructor() {
    super("button", ['winners"']);
    this.element.innerHTML = `
  
        
      
       TO WINNERS
        
        
      `;
    this.element.setAttribute("href", "/winers");

    this.element.setAttribute("id", "winnersId");
  }
}

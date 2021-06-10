import "./btnGarage.scss";
import { BaseComponent } from "../base-component";

export class BtnGarage extends BaseComponent {
  constructor() {
    super("button", ['garage"']);
    this.element.innerHTML = ` 

      
    
     TO GARAGE 
      
      
    `;
    this.element.setAttribute("href", "/garage");
    this.element.setAttribute("id", "garageId");
  }
}

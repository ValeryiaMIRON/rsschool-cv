import "./winners.scss";
import { BaseComponent } from "../../components/base-component";

export class Winners extends BaseComponent {
  constructor() {
    super("div", ["wrapper-winners"]);
    this.element.innerHTML = `
    <span>Winners (     <span id="winners-count">0</span>     )     </span>

    <div>Page #    <span id="winners-count-page">1</span>      </div>

    <table cellspacing="20" cellpadding="20" width="100" height="100">
    <tbody>
      <tr>
        <td>Number</td>
        <td>Car</td>
        <td>Name</td>
        <td>Wins</td>
        <td>Best time (seconds)</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
    `;
  }
}

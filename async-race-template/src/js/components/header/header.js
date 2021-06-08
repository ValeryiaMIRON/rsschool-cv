import { garage } from '../../modules/garage/garage.view';
import { winnerRender } from '../../modules/winners/winners.view';

export class Header {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }

  html() {
    return `
    <header class="header">
        <div class="container">
            <nav class="nav">
                <ul class="menu">
                    <li><a href="#" class="active" id="garage">Garage</a></li>
                    <li><a href="#" id="winners">Winner</a></li>
                </ul>
            </nav>

        </div>
    </header>
    `;
  }

  render() {
    this.el.innerHTML = this.html();
    this.event();
  }

  event() {
    this.el.querySelector('#winners').addEventListener('click', (e) => {
      console.log('click');
      e.preventDefault()
      winnerRender()
    });
    this.el.querySelector('#garage').addEventListener('click', (e) => {
      console.log('click');
      e.preventDefault()
      garage();
    });
  }
}